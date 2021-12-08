"""
format pictures from heavy file formats such as png, jpeg... to a light weight format '.webp'
"""

import os
import json

webp_dir = 'D:\\programing\\libwebp-1.2.1-windows-x64\\libwebp-1.2.1-windows-x64\\bin\\cwebp'
input_dir = lambda directory : f'D:\\programing\\HTML\\Young-Disciples-website\\assets\img\\{directory}'
output_dir = lambda directory : f'D:\\programing\\HTML\\Young-Disciples-website\\assets\img\\{directory.find(".")}.webp'

with open('D:\\programing\\HTML\\Young-Disciples-website\\assets\\js\\meet-us.json', 'r') as file:
    data = json.load(file)
    # loop through json object in file
    for individual in data['individuals']:
        # check if the file has already been formatted
        if output_dir(individual['backgroundPicture'])[-5:] != '.webp':
            # run through formatting software and output every file to .webp
            os.system(f'{webp_dir} {input_dir(individual["backgroundPicture"])} -q 80 -o {output_dir(individual["backgroundPicture"])}')
