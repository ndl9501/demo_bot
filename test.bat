echo off
set/A minute = 0;
echo %minute%
FOR /L %%d IN (0 1 10 ) DO  (
	start E:\nodejs\discord\demo_bot\startbot.bat
	timeout /t 5 /nobreak
	taskkill /f /im "startbot.bat" 
)
