# Test text file generator

This simple test text file generator is created to generate big test text files. Its contents is 'Lorem ipsum' quotes followed by delimiter, ```%\n``` by default.

Length of the file can be configured by changing the ```MAX_CHUNKS``` constant.

Here is number of chunks, file size size and execution time (MacBook Pro 2.3 GHz 8-Core i9, 16 Gb RAM):
* 100K -> ~20Mb (133ms), 
* 10M -> ~2Gb (13350 ms, 13s)
* 20M -> ~4Gb (58142 ms, 58s)

## Usage

```
node testGenerator.js
```

It creates file named ```quotes.txt``` in the working directory.

## Output file demo

```
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta ap
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta aperiam illo porro 
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta aperiam illo porro s
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta aperiam illo porro soluta ad alia
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta aperiam illo porro soluta ad alias
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta aperiam i
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta aperiam illo porr
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat d
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta aperiam 
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est err
%
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, qu
%
```