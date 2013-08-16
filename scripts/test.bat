@echo off

REM Windows script for running unit tests
REM You have to run server and capture some browser first
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Karma (npm install -g karma)

set BASE_DIR=%~dp0
REM karma start "%BASE_DIR%\..\config\karma.conf.js" %*
REM karma start "..\config\karma.conf.js"


REM C:\Users\root\AppData\Roaming\npm\node_modules\karma\bin\karma start ..\config\karma.conf.js
REM C:\Users\root\AppData\Roaming\npm\karma start ..\config\karma.conf.js


cd ..\config
C:\Users\root\AppData\Roaming\npm\karma start karma.conf.js
