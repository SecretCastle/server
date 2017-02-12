# server

	模拟 本地服务器和websocket服务器 处理接口

本地服务器

* 使用方法
	
	* 本地服务器
	 
			$ git clone https://github.com/SecretCastle/server.git
	
			npm run dev
	
			http
	
		浏览器打开
			
			http://localhost:3000
		
		路由默认打开的是static文件夹里的index.html
		
	
	* websocket

			npm run dev
			
			选择ws
			
			运行websocket服务器，目前的websocket是用ws模块搭建，在 http_websocket/html里
			运行html文件，即可使用，阿里厂测包可放在html文件夹下。
			
			目前主要的目的是模拟阿里智能的命令的上报与云端的下发（开发中～～）
		
		微信小程序中，模拟websocket链接

			wx.connectSocket({
            	url: 'ws://localhost:8001/'
        	})
        	