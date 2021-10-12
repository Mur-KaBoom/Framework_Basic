:: Beginning of hub batch file
set SERVER_VERSION=3.141.59
set HUB_PORT=5557
set REGISTER_IP=192.168.100.24:4444
set CHROME_DRIVER=.\webdriver\chromedriver.exe
java -Dwebdriver.chrome.driver=C:\Users\Palina_Kazlova\Downloads\Demo-M8-JS\Demo-M8-JS\grid_json\webdriver -jar grid\selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -browser "browserName=chrome,maxinstance=5,platform=WINDOWS" -port %HUB_PORT%
:: End of hub batch file
pause