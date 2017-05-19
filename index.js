//const kafka = require('kafka-node'),
      //Producer = kafka.Producer,
      //KeyedMessage = kafka.KeyedMessage,
      //client = new kafka.Client('127.0.0.1:2181'),
      //producer = new Producer(client),
      //km = new KeyedMessage('key', 'message'),
      //payloads = [
        //{ topic: 'topic1', messages: 'hi', partition: 0 },
        //{ topic: 'topic2', messages: ['hello', 'world', km] }
      //];

//producer.on('ready', function () {
  //producer.send(payloads, function (err, data) {
    //console.log(">>> ", data);
  //});
//});

//producer.on('error', function (err) {
  //console.log("ERROR: ", err);
//});

//console.log("it works", producer);

///////////////////////////////////////////

//const kafka = require('kafka-node'),
    //HighLevelProducer = kafka.HighLevelProducer,
    //client = new kafka.Client('127.0.0.1:2181'),
    //producer = new HighLevelProducer(client);
//// Create topics sync
//producer.createTopics(['t','t1'], false, function (err, data) {
    //console.log(data);
//});
//// Create topics async
//producer.createTopics(['t'], true, function (err, data) {});
//producer.createTopics(['t'], function (err, data) {});

//////////////////////////////////////////////

//var kafka = require('kafka-node'),
    //Producer = kafka.Producer,
    //client = new kafka.Client('127.0.0.1:2181'),
    //producer = new Producer(client),
    //payloads = [
        //{ topic: 'Topic1', messages: 'hi' },
    //];

//producer.send(payloads, function (err, data) {
  //console.log(">>>>>>> ",data," error: ",err);
//});

var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client('127.0.0.1:2181'),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: 'Topic1', messages: 'hi' },
        { topic: 'Topic2', messages: ['hello', 'world'] },
        { topic: 'Topic2', messages: 'geilo' }
    ];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});

