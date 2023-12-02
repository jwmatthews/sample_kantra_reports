SOURCE_DIR=ticket-monster
OUTDIR=$PWD/out/${SOURCE_DIR}
mkdir -p $OUTDIR
time ./kantra analyze -i $PWD/$SOURCE_DIR -t "quarkus" -t "jakarta-ee" -t "jakarta-ee8+" -t "jakarta-ee9+" -t "cloud-readiness" -o $OUTDIR --overwrite
