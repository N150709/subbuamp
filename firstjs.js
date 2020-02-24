import ws from 'ws';

const wsServer = new ws.Server({port:8080});

wsServer.on('connection',ws => {
	ws.on('message',message => {
		for(const client of wsServer.clients){
			if(client.readyState === ws.OPEN){
				client.send(message);
			}
		}
	});
});
