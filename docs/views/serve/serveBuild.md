---
title: 从零搭建服务器
sidebar: 'auto'
date: 2020-05-19
tags:
 - serve
categories:
 - 服务器
---

# 1.服务器购买
腾讯云**99/年（1核 2G 1M）**，需要用的时间长的，建议买三年的


# 2.服务器基础配置
## 1.先测试下登录
###  mac
`ssh root@ ip   //ssh 用户名@公网 IP  `
###  window
linux命令 不好的 直接用 winScp，图形化界面

下载地址：链接:https://pan.baidu.com/s/1gf49kDc9SuO-7jWK7I3csg  密码:aona

## 2.安装 nginx（cent os）
### 参考：[cent os 安装 nginx](https://blog.csdn.net/oldguncm/article/details/78855000)

### 查看 nginx 目录

`whereis nginx  // /usr/local/bin/nginx`
### 查看 nginx 配置文件正确性
`/usr/sbin/nginx -t `

## 3.配置 nginx
配置80端口转发的地址（主要配置）：

 
```
   server {        
     listen       80 default_server;        
     listen       [::]:80 default_server;       
     server_name  _;       
     root         /home; 
   }
```


## 4.访问 服务器公网 IP
在第三步 nginx 的配置目录下放一个 index.html

访问 ip，可以看到测试页面


# 3.域名
## 1.域名购买

腾讯云 域名购买.xyz和 .club  新用户一块钱，不要钱

## 2.域名要实名认证，备案，官网都有指导

## 3.域名解析

参考文章：[腾讯云绑定域名](https://cloud.tencent.com/developer/article/1517187)

# 完成静态服务搭建





