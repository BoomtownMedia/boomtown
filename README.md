# run locally
```
git clone https://github.com/BoomtownMedia/boomtown.git
cd boomtown
meteor npm install
meteor
```

# Heroku deploy
create Heroku app
add mLab mongoDB addon under Resources tab<br />
set ROOT_URL to herokuapp domain address under Settings tab<br />
add https://github.com/AdmitHub/meteor-buildpack-horse to Heroku buildpack under Settings tab<br />
under Deploy tab, select Github and deploy the master branch<br />



[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/BoomtownMedia/boomtown)
