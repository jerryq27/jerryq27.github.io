---
categories: [Project, WebDev]
tags: [python, featured]
---

# HTTP Server

This is my first project from CodeCrafters. Their catalog of project challenges are definitely up my alley.
I enjoy learning more about how things work at the lower level, and being able to learn in a project-based way,
that's even better!

When it comes to networking, sockets, TCP, web servers, etc., these are definitely areas I can improve on and
reading more about them can fill some gaps in my knowledge. 

## CodeCrafters

One thing I'm really enjoying about CodeCrafters is that they do project-based learning the right way. The problem
I've encountered with most tutorials is that most of them just give you the code and don't explain why it was written
that way. CodeCrafters provides the initial project template, but the code is very minimal. Each step provides a
challenge, the inputs that will be used, and the expected outputs. If you get lost, they have a _Concepts_ section,
that provides documentation and lessons related to the current challenge. The _Concept_ section is fantastic. It
doesn't give you the answers, but provides you with the information you need to solve the challenge. CodeCrafters
also provides a _Forums_ section if you need help from other users, and a _Code Examples_ section to compare your
code with other user's submission. 

> Non-members get limited access to _Code Examples_ and only when they complete the section's challenge. I honestly
prefer it that way. I'd rather solve the challenge first without the influence from other people's code. Plus,
it's more fascinating seeing how different my approach is to others after I finish the challenge.

## TCP/IP

I have heard terms like TCP and IP thrown around here and there, I mean, who hasn't heard of an IP address? I wasn't
aware they were protocols, and what each protocol did exactly. Reading more about them in the _Concept_ section,
I learned why IP is known as the _unreliable_ protocol:

- Packets aren't guaranteed to arrive to their destination
- Packets sent at the same time aren't guranteed to arrive at the same time
- Packets aren't guaranteed to arrive in the order sent

And TCP is known as the _reliable_ protocol since it uses IP and fixes these shortcomings by:

- Asking the receiver if all packets have been received, if not, resends them
- Indexes all packets, so the receiver can order the packets once received and determine if any are missing

## Sockets

Learning more about TCP and the _TCP Connection_ made the starter code for the project more understandable:

```python
server_socket = socket.create_server(("localhost", 4221), reuse_port=True)
server_socket.accept() # wait for client
```

At first I wasn't sure what was going on here. I didn't what the socket module was for an how it fits into this
whole HTTP server project. Good thing they had a section on explaining the TCP Connection. HTTP servers utilize
TCP and in order to create a TCP connection, one program must act as the server and another must act as the client.
The server waits for a connection, and the client initiates a connection. So in this case, the socket module is
used to create a TCP server and bind it to a port. Then something like `curl` can be used as the client program
to initiate connections to the Python server:

```bash
curl -v http://localhost:4221
```

## HTTP Requests and Responses

Probably the last concept I learned on this project was how HTTP requests and responses are formatted (also how to
receive and send data with the socket module). The parts I found interesting were that these messages use `\r\n`
(Carriage Return, Line Feed) as the delimiter. Each section uses two CRLF and each line uses one CRLF:

Request
```
// Request line
GET /index.html HTTP/1.1
\r\n                         // CRLF that marks the end of the request line
// Headers
Host: localhost:4221\r\n     // Header that specifies the server's host and port
User-Agent: curl/7.64.1\r\n  // Header that describes the client's user agent
...
\r\n

/** Request body **/
...
```

Response

```
// Status line
HTTP/1.1 200 OK
\r\n                          // CRLF that marks the end of the status line
// Headers
Content-Type: text/plain\r\n  // Header that specifies the format of the response body
Content-Length: 3\r\n         // Header that specifies the size of the response body, in bytes
\r\n                          // CRLF that marks the end of the headers

/** Response body **/
...
```

The rest of this project involved learning what some headers mean and how to format responses according to what
is requested. 

## Conclusion

I learned quite a bit about networking protocols creating a simple HTTP server. I really enjoyed how CodeCrafters organized
this project and I'm interested in seeing what else they have to offer! I also plan to redo this project in both C and Rust.
I want to improve my programming skills by using a lower level language like C and I've also been wanting to learn Rust. This
project is a good one to practice those languages.

