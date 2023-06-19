import time
import whois

domain = 'jp'
fqdns = [f'{name}.{domain}' for name in [chr(i) + chr(j) for i in range(97, 123) for j in range(97, 123)]]

for fqdn in fqdns:
    time.sleep(1)
    if not whois.whois(fqdn).status:
        print(fqdn)
