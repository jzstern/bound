set -e
mkdir ~/iexec-projects
cd ~/iexec-projects
iexec init --skip-wallet
iexec dataset init --encrypted
mkdir datasets/original/my-first-dataset
echo "Hello, world!" > datasets/original/my-first-dataset/hello-world.txt
iexec dataset encrypt --algorithm scone
ADDR=`iexec dataset deploy --chain bellecour --password 1234 2>&1 | grep "Deployed new dataset at address" | tr ' ' '\n' | tail -1`
echo $ADDR
iexec dataset push-secret $ADDR --chain bellecour --password 1234
git clone https://github.com/iExecBlockchainComputing/scone-hello-world-app-with-dataset.git 
cd scone-hello-world-app-with-dataset
#cp ../iexec/Dockerfile ./
#mkdir utils
#cp ../iexec/signer.py utils/
if [[ "$(docker images -q jrastit/scone-hello-world-app:0.0.1 2> /dev/null)" == "" ]]; then
docker image build -t "jrastit/scone-hello-world-app:0.0.1" .
docker image push "jrastit/scone-hello-world-app:0.0.1"
fi
cd ..
DIGEST=`docker images jrastit/scone-hello-world-app --digests | grep sha256 | cut -d : -f 2 | cut -d " " -f 1
iexec app init`
echo 0x$DIGEST
sed -i "s#iexechub/vanityeth:1.1.1#jrastit/scone-hello-world-app:0.0.1#" iexec.json
sed -i "s#00f51494d7a42a3c1c43464d9f09e06b2a99968e3b978f6cd11ab3410b7bcd14#$DIGEST#" iexec.json
sed -i "s#VanityEth#jrastit#" iexec.json
ADDR2=`iexec app deploy --chain bellecour --password 1234 2>&1 | grep "Deployed new app at address" | tr ' ' '\n' | tail -1`
echo $ADDR2
CMD="iexec app run $ADDR2 --chain bellecour --password 1234 --params /app/app.py --tag tee --dataset $ADDR --beneficiary 0x0000000000000000000000000000000000000000" --force 
echo $CMD
$CMD
cd ..
rm -rf ~/iexec-pojects

