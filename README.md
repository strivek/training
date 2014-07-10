training
========

测试~~~~~~

### 更新远程仓库到本地文件夹
    $ git clone https://github.com/strivek/training.git
### 查看远程库
查看全部远程仓库名称
    $ git remote
查看远程仓库地址
    $ git remote -v 
    
===========

### 从远程数据库获取数据

#### fetch 命令
*fecth只是将远程库的书库下载到本地仓库，并不会自动合并到当前的分支，需要手工合并*
    
    $ git fetch <远程主机名>
    
更新远程主机的更新,默认取回所有分支（branch）的更新

    $ git fetch <远程主机名> <分支名>

取回指定分支的更新,fecth并不进行更新，只是从远程获取更新到本地，所有取回的更新需要用

> "远程主机名/分支名"的形式读取
>  "git branch命令-r选项,可以用来查看远程分支,-a选项查看所有分支"


    $ git branch -r
    origin/master
    $ git branch -a
    * master
      remotes/origin/master
      
#### pull 命令

获取并且合并到当前工作分支
ks
    $ git pull origin master
    

======
11:46

###利用Github客户端进行Git管理，分支管理

> 单纯的命令行非常简洁，但是对于一部分不擅长命令行的同行来说，学习成本相对高昂


07-10 16:22

###bug分支



