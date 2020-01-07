* https://stackoverflow.com/questions/5284340/what-is-node-js-connect-express-and-middleware

* REPL(read, eval, print, loop) it is like irb

* node app.js to run

* Node Core Modules(some common)
  * http => Launch a server, send requests
  * https => Launch a SSL Server
  * fs => 
  * path
  * os

* require()
  * used to import file globally available
    * require('http')  

* Node Event Loop(infinite loop)
  * only callbacks or new event that are added(registered) into the event loops corresponding arrays, which are fast. 
    Each of this will be associated with a event handler name
  * all the heavy tasks like file operations and others will be handed to the thread pool of the
    the OS, once tasks are executed corresponding event is triggered from the event loop is 
    executed    
  * Actual loop
    * Timers(setTimeout, setInterval)
    * Pending Callbacks(Execute I/O related callbacks that were deffrerd, all write and read 
      callbacks. File and Network Opreations which are blocking)  
    * Poll Phase
      * Node.js looks for new I/O events and execute their callbacks immediately, if not it will 
       deffer(decide something later) the execution and register it as pending callback   
    * Check Phase
      * setImmediate callbacks will be execute, will  execute immediatetly but always after any open callbacks have been executed    
    * Close Callbacks   
      * executes all close event callbacks