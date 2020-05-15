module.exports = {
  apps: [
    {
      // PM2 应用名称
      name: 'travis-test-deploy',
      // node 启动文件
      script: 'server.js',
    },
  ],
  deploy: {
    // "prod" 是环境名称
    prod: {
      // 私钥目录
      key: '~/.ssh/id_rsa',
      // 登录用户
      user: 'root',
      // 远程服务器
      host: ['47.106.87.3'],
      // 自动将 github 加入远程服务器的信任列表
      ssh_options: 'StrictHostKeyChecking=no',
      // git 分支
      ref: 'origin/master',
      // git 仓库地址（ssh）
      repo: 'git@github.com:B2D1/travis-test.git',
      // 项目在远程服务器的存放路径
      path: '/root/travis-test-deploy',
      // PM2拉取最新分支后，安装 npm 包，并启动（重启）NodeJS 应用
      'post-deploy':
        'source ~/.nvm/nvm.sh && yarn install && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
