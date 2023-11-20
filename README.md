# Test text file generator

This simple test text file generator is created to generate big test text files. Its contents is 'Lorem ipsum' quotes followed by delimiter, ```%\n``` by default.

Length of the file can be configured by changing the ```MAX_CHUNKS``` constant.

Here is number of chunks, file size size and execution time (MacBook Pro 2.3 GHz 8-Core i9, 16 Gb RAM):
* 100K -> ~20Mb (133ms), 
* 10M -> ~2Gb (13350 ms, 13s)
* 20M -> ~4Gb (58142 ms, 58s)

## Usage

```
node testFileGenerator.js
```

It creates file named ```quotes.txt``` in the working directory.