# Bazel workspace created by @bazel/create 3.5.1

# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "coverage_test",
    # Map the @npm bazel workspace to the node_modules directory.
    # This lets Bazel use the same node_modules as other local tooling.
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "aspect_bazel_lib",
    sha256 = "d1d712d115b908eaaa22aa899fa0e9016d70347debdafe295059e79adda93b02",
    strip_prefix = "bazel-lib-0.12.0",
    url = "https://github.com/aspect-build/bazel-lib/archive/refs/tags/v0.12.0.tar.gz",
)

http_archive(
    name = "rules_nodejs",
    sha256 = "4d48998e3fa1e03c684e6bdf7ac98051232c7486bfa412e5b5475bbaec7bb257",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.5.0/rules_nodejs-core-5.5.0.tar.gz"],
)

http_archive(
    name = "aspect_rules_js",
    sha256 = "7745b11c5d4018e1befa51ba7366149d739aa2521bc2675506b37e1f602204bc",
    strip_prefix = "rules_js-0.9.3",
    url = "https://github.com/aspect-build/rules_js/archive/refs/tags/v0.9.3.tar.gz",
)

http_archive(
    name = "aspect_rules_ts",
    sha256 = "af82df74c1143581417d3ba61232255e678a3d2f9ce3b523b85386d3e21d810e",
    strip_prefix = "rules_ts-0.3.0",
    url = "https://github.com/aspect-build/rules_ts/archive/refs/tags/v0.3.0.tar.gz",
)

# aspect_bazel_lib

load("@aspect_bazel_lib//lib:repositories.bzl", "aspect_bazel_lib_dependencies")

aspect_bazel_lib_dependencies()

#
# Node.js
#

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//js:npm_import.bzl", "translate_pnpm_lock")

translate_pnpm_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

#
# Typescript
#

load("@aspect_rules_ts//ts:repositories.bzl", "LATEST_VERSION", "rules_ts_dependencies")

rules_ts_dependencies(ts_version = LATEST_VERSION)
