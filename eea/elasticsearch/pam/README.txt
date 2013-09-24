===============================================================================
PAM - EEA database on climate change mitigation policies and measures in Europe
===============================================================================


Indexing in ElasticSearch
=========================

After uploading the csv to semantic, the data should be indexed in ElasticSearch
For indexing the pam data in elasticsearch the following scripts should be executed:

1. delete the old river index: scripts/es-pam-remove-river.sh

2. delete the old data: scripts/es-pam-remove-data.sh

3. setup the analyzers: scripts/es-pam-setup-analyzers.sh
Note: if there are columns which needs extra analizer for indexing (ex. comma separator, or no separator) it
should be configured in this script

4. index the new data: scripts/es-pam-4-create.sh