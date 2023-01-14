# aries-askar-test-nodejs

Wrapper for Nodejs around Aries Askar

## Requirements

This has been tested extensively with Nodejs version `16.11.0` and `16.15.0`.
Older and newer versions might also work, but they have not been tested.

## Installation

```sh
yarn add aries-askar-test-nodejs aries-askar-test-shared
```

## Setup

In order to work with this module a function from `aries-askar-test-shared` has to be
called to register the native module (aries-askar-test-nodejs)

```typescript
import { registerAriesAskar } from 'aries-askar-test-shared'
import { ariesAskarNodeJS } from 'aries-askar-test-nodejs'

registerAriesAskar({ askar: ariesAskarNodeJS })
```
