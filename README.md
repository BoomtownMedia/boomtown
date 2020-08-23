# run locally
git clone https://github.com/BoomtownMedia/boomtown.git <br />
cd boomtown<br />
meteor npm install<br />
meteor <br />

# Heroku deploy
create Heroku app
add mLab mongoDB addon under Resources tab<br />
set ROOT_URL to herokuapp domain address under Settings tab<br />
add https://github.com/AdmitHub/meteor-buildpack-horse to Heroku buildpack under Settings tab<br />
under Deploy tab, select Github and deploy the master branch<br />



