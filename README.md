# run locally
git clone https://github.com/BoomtownMedia/boomtown.git
cd boomtown
meteor npm install

# Heroku deploy
create Heroku app
add mLab mongoDB addon under Resources tab
set ROOT_URL to herokuapp domain address under Settings tab
add https://github.com/AdmitHub/meteor-buildpack-horse to Heroku buildpack under Settings tab
under Deploy tab, select Github and deploy the master branch



