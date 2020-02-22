import os
import json

dic = {}

pairs = [
    ['inf.txt', 'inf'],
    ['ing.txt', 'ing'],
]
for filename,listname in pairs:
    text = open(filename, 'r', encoding='UTF-8').read()
    
    obj = {}
    for block in text.split('\n\n'):
        lines = block.split('\n')
        blockname = lines[0]
        obj[blockname] = lines[1:]

    dic[listname] = obj


with open('data.json', 'w+', encoding='UTF-8') as file:
    file.write(json.dumps(dic,indent=4))