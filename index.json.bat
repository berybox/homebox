@echo off

set OUT_FILE=index.json.js
set IN_FILE=index.json

echo let jsonStr = ` > %OUT_FILE%
type %IN_FILE% >> %OUT_FILE%
echo `; >> %OUT_FILE%