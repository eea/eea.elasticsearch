#!/bin/bash

echo "*****************************************"
echo "This script will create an EEA RDF River " 
echo "on the requested elastic search instance "
echo "*****************************************"
echo "sparql endpoint:" $1
echo "es endpoint:" $2
echo "type:" $3
echo "triples batch size:" $4
echo "total batches:" $5
echo "es index:" $6

COUNTER=0
while [  $COUNTER -lt $5 ]; do
      let "LIMIT=($COUNTER+1)*$4"
      let "OFFSET=$COUNTER*$4"
      echo The counter is $COUNTER
      echo LIMIT $LIMIT
      echo OFFSET $OFFSET
      ./curlriver.sh $1 $2 $3 $LIMIT $OFFSET $6
      let COUNTER=COUNTER+1 
done

