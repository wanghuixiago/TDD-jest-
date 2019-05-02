# TDD-jest-
运用jest单元测试框架来进行TDD开发

1、npm init -y

2、npm install -d jest

3、把pakage.json修改文件里面的为

scripts{

Test:”jest”

}

4、新建babel.config.js

内容为：

module.exports = {

    presets: [
    
        [
        
            '@babel/preset-env',
            
            {
            
                targets: {
                
                    node: 'current',
                    
               
               },
            
            },
       
       ],
   
   ],

};

运行测试用例 npm run test
