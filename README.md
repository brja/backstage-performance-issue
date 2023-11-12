# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```


This is for demonstrating performance issues in current probably 19.*-20next2

How to test:
`yarn install` + Modify the package.json in backend by changing start script to fx. 3 versions below.
```
"start": "unset LEGACY_BACKEND_START;unset NODE_OPTIONS;backstage-cli package start",
~35-40 seconds

"start": "unset LEGACY_BACKEND_START;export NODE_OPTIONS=--max_old_space_size=6144;backstage-cli package start",
~33-35 seconds

"start": "export LEGACY_BACKEND_START=true;unset NODE_OPTIONS;backstage-cli package start",
~5-6 seconds
~30 seconds cold-start(any caches invalidated after some time?)
```

For each modification do 3 runs of `yarn dev` to measure the performance until the backend listens.
```
 sudo kill $(sudo lsof -t -i :7007);for i in {1..3}; do echo -e "\033[31mRun #$i\033[0m"; start=$(date +%s); yarn dev | (while IFS= read -r line; do echo "$line"; if [[ "$line" == *"Listening on"* ]]; then pkill -f "yarn dev"; echo -e "\a"; end=$(date +%s); elapsed=$((end - start)); echo -e "\033[31mTime elapsed for run #$i: $elapsed seconds\033[0m"; fi; done); done
```

