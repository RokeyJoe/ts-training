

// decorator.ts 创建这个文件
function helloWord(target) {
    console.log('hello Word!');
}

@helloWord
class HelloWordClass {
    constructor() {
        console.log('我是构造函数')
    }
    name: string = 'zzb';
}

let instance = new HelloWordClass();

