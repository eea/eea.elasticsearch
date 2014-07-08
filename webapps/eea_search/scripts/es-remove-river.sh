#!/bin/bash
curl -u eea:eea -XDELETE $1'/_river/search0'
curl -u eea:eea -XDELETE $1'/_river/search1'
curl -u eea:eea -XDELETE $1'/_river/search2'
curl -u eea:eea -XDELETE $1'/_river/search3'
curl -u eea:eea -XDELETE $1'/_river/search4'
curl -u eea:eea -XDELETE $1'/_river/search5'
curl -u eea:eea -XDELETE $1'/_river/search6'
curl -u eea:eea -XDELETE $1'/_river/search7'
