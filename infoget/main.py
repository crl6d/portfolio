print("Hello, this program will help you to find any information! \n")
print("Please, give me phone number without and spacese")
print("(if you don't have one- type 'no')")
phone_number = input()


if (phone_number == "no"):
    phone_number = 0


for n in phone_number:
    if type(n) != int :
        print("ivalid number, try again")
        break
        