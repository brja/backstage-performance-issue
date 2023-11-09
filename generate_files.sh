#!/bin/bash

# Change to the target directory
cd packages/backend/src/plugins

for i in {1..50}; do
  filename="foo${i}.ts"
  cat > "$filename" <<- EOM
import { createRouter } from '@internal/plugin-foo${i}-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
    discovery: env.discovery,
  });
}
EOM
done
