var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client('127.0.0.1:2181'),
    consumer = new Consumer(
        client,
        [
            { topic: 't', partition: 0 }, 
            { topic: 't1', partition: 1 }
        ],
        {
            autoCommit: false
        }
    );
