@echo off
setlocal enabledelayedexpansion

echo Setting up Next.js environment...

REM Check if Node.js is already installed
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo Node.js is already installed
    node --version
    npm --version
    goto initialize_nextjs
)

REM Download Node.js to temp directory
echo Downloading Node.js...
powershell -Command "$ProgressPreference='SilentlyContinue'; Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.15.1/node-v20.15.1-win-x64.zip' -OutFile '%TEMP%\nodejs.zip'"

if not exist "%TEMP%\nodejs.zip" (
    echo Download failed
    exit /b 1
)

REM Extract Node.js
echo Extracting Node.js...
powershell -Command "Expand-Archive '%TEMP%\nodejs.zip' -DestinationPath 'C:\' -Force"

REM Rename directory
if exist "C:\node-v20.15.1-win-x64" (
    ren "C:\node-v20.15.1-win-x64" "nodejs"
)

REM Add to PATH
setx PATH "%PATH%;C:\nodejs"
set PATH=%PATH%;C:\nodejs

:initialize_nextjs
echo.
echo Node.js and npm information:
C:\nodejs\node.exe --version
C:\nodejs\npm.cmd --version

echo.
echo Environment check complete!
echo To initialize a Next.js project, run: npx create-next-app@latest

pause
