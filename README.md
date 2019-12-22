# TypeScript Packaging example / repro

This is an example of building a TypeScript npm package using Bazel and
rules_nodejs.

To exercise it and see the results:

```bash
bazel build ...
find bazel-bin/example
```

What I expect to see:

* Package file
* CommonJS bundle
* src directory with just a file .d.ts

What I actually see, in addition to the above:

* src includes the .js file - but according to docs that is not
  in the (primary) output of ts_library()?
* "External" directory with numerous other .d.ts files, but there
  appears to be code in pkg_npm to avoid this?
