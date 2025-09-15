import socket
import threading
import sys

LOCAL_IP = "192.168.1.204"
BROADCAST_IP = "255.255.255.255"
PORT = 5556

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)

sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)

sock.bind((LOCAL_IP, PORT))

print("Chat")

def receive_loop():
    while True:
        try:
            msg, addr = sock.recvfrom(1024)
            sender_ip = addr[0]

            if sender_ip == LOCAL_IP:
                continue

            sys.stdout.write("\r")
            sys.stdout.flush()
            print(f"[{sender_ip}]: {msg.decode(errors='ignore')}")
            sys.stdout.write("You: ")
            sys.stdout.flush()
        except Exception as e:
            print("Receive error:", e)
            break

threading.Thread(target=receive_loop, daemon=True).start()

while True:
    try:
        line = input("You: ")
        sock.sendto(line.encode(), (BROADCAST_IP, PORT))
    except KeyboardInterrupt:
        print("\nExiting chat.")
        break
    except Exception as e:
        print("Send error:", e)
        break
