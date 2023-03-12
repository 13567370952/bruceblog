# 忽略错误
set -e

# 打包构建
npm run build

# 进入待发布的目录
cd docs/.vuepress/dist

# 提交代码
git init
git add -A
git commit -m 'feat: Bruceblog_vuepress 发版'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@gitee.com:brucecai55520/bruceblog.git master:pages

# 返回一开始的路径
cd -

