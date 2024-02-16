pushd .
mkdir -p sample_repos

# HelloWorld MDB
#  This started from: https://github.com/jboss-developer/jboss-eap-quickstarts/tree/7.4.x/helloworld-mdb/src/main/java/org/jboss/as/quickstarts/mdb
git clone https://github.com/savitharaghunathan/helloworld-mdb.git helloworld-mdb-quarkus
cd helloworld-mdb-quarkus || exit
git checkout quarkus
cd ..

git clone https://github.com/konveyor-ecosystem/cmt.git cmt
cd bmt || exit
git checkout quarkus
cd ..

popd || exit
