# Vercel CSV API

Simple API endpoint that returns CSV text in Google Sheets format.

### Deploy
```bash
npm i
vercel deploy
```

### Use

CSV endpoint: `https://<your-deployment>/spreadsheets/d/1ooutDlm2SOxviPB4RjLyB-AUoncqpFSjpysU5gVdZPY/gviz/tq?tqx=out:csv&gid=0&something=ignored`

Returns CSV text with the following format:
```
"key","expire",""
"e9a3bf77dab2f369f78cb6a2d64e451f","2222-12-31","Máy Chính"
...
```

### Notes

* The endpoint returns static CSV data - no external API calls needed.
* Any query parameters after `gviz/tq` are ignored.

