#!/bin/bash

for i in {1..50}; do
  module_id="foo${i}"
  echo "$module_id" | yarn new --select backend-plugin --option id=$module_id
done
