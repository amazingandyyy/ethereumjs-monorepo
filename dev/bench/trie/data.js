window.BENCHMARK_DATA = {
  "lastUpdate": 1641851215770,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a54b3a40f9a2c9fef46e094a954b857bedb88f9",
          "message": "Common, Tx, Block, Blockchain, VM, Client: New Arrow Glacier Releases (#1555)\n\n* Common -> release: bumped version to v2.6.0, added CHANGELOG entry, updated upstream dependency versions, updated README\r\n\r\n* Common -> release: rebuild documentation\r\n\r\n* tx -> Release: bumped version to v3.4.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Block -> release: bumped version to v3.6.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Block -> release: rebuild documentation\r\n\r\n* blockchain -> release: bumped version to v5.5.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* VM -> release: bumped version to v5.6.0, added CHANGELOG entry, updated upstream dependency versions, updated README\r\n\r\n* client -> release: bumped version to v0.2, added CHANGELOG entry (TODO)\r\n\r\n* Rebuild package-lock.json file\r\n\r\n* client -> release: additional CHANGELOG work\r\n\r\n* client -> release: finalized CHANGELOG\r\n\r\n* fix: reinit vmexec's txCounter on every new block range executed\r\n\r\n* Apply suggestions from code review\r\n\r\n* update tx error debug log msg `accessList=num (size)` to accessListCount=num` (for increased clarity/readability)\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-09T08:59:51+01:00",
          "tree_id": "0324ab3d0be2d392140c4792e0d3343b7907fb52",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4a54b3a40f9a2c9fef46e094a954b857bedb88f9"
        },
        "date": 1636445147434,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11648,
            "range": "±12.61%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13236,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12196,
            "range": "±3.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6873,
            "range": "±19.44%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13189,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1101,
            "range": "±7.17%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 115,
            "range": "±102.09%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±16.33%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.34,
            "range": "±11.11%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d0ba62c588381232d94b55a98684bb93e90785d",
          "message": "VM: Test Runner Improvements (#1560)\n\n* VM -> tests: added error message to tx runtime error in GeneralStateTestsRunner\r\n\r\n* VM -> tests: added basic execution time console output to state and blockchain tests\r\n\r\n* VM -> tests: simplify path call structure in test loader\r\n\r\n* VM -> tests: added new customTestsPath CLI option\r\n\r\n* VM -> tests: replaced file name test run log output with fully qualified sub directory path for easier test localization\r\n\r\n* organize tester files into own folder, organize imports, add @types/minimist and @types/node-dir\r\n\r\n* ignore benchmark block 9422911 due to high variance\r\n\r\n* update path import, tidy, copy over needed changes to testLoader in tx library\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-10T12:29:50+01:00",
          "tree_id": "1fb334425d5b88357edf5f1e243b3545e2c97e89",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3d0ba62c588381232d94b55a98684bb93e90785d"
        },
        "date": 1636544127515,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11613,
            "range": "±12.62%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12987,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11649,
            "range": "±4.26%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6837,
            "range": "±22.50%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12610,
            "range": "±6.44%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1156,
            "range": "±6.60%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 137,
            "range": "±85.99%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±22.26%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 14.36,
            "range": "±85.62%",
            "unit": "ops/sec",
            "extra": "20 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33eeac3162aee00047be4a59180039e1a7da5f9a",
          "message": "client: save receipts and implement getLogs, getTxReceipt, getTxByHash (#1556)\n\n* save receipts, implement getLogs, getTxReceipt, getTxByHash\r\n* getLogs toBlock query fix, add test using fromBlock/toBlock as numbers, make `--ws` default false\r\n* fix: reinit vmexec's txCounter on every new block range executed\r\n* add effectiveGasPrice to receipt\r\n* fix client coverage reporting (each .nycrc needs its own includes, inheriting it was causing problems)\r\n* fix typos\r\n* add getLogs block range limit, megabyte size limit (150mb default for json rpc, 2mib limit for devp2p receipts response)\r\nrefactor getLogs to accept block param as block instead of blockHash (simplification, no need to re-query for the blocks)\r\n* Add pooledTxs encoding test to bump coverage\r\n* add more tests for handling/encoding/decoding GetReceipts/Receipts\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-11-14T13:00:42-08:00",
          "tree_id": "cf4c273104b32d88a014200b6df34f5f039386c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/33eeac3162aee00047be4a59180039e1a7da5f9a"
        },
        "date": 1636923958534,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11393,
            "range": "±13.35%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12800,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12013,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7067,
            "range": "±22.03%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13523,
            "range": "±4.29%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1110,
            "range": "±6.79%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±87.59%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±27.60%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.24,
            "range": "±12.83%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aec64d05230cc0dd7050d7bf072dca6178dc7b62",
          "message": "VM: Add BaseStateManager (#1548)\n\n* vm -> BaseStateManager: added class and constructor, improved DefaultStateManager class documentation\r\n\r\n* VM -> StateManager: removed unused warm() method from Cache\r\n\r\n* VM -> StateManager: made Cache backend agnostic by replacing direct trie calls with operation callbacks\r\n\r\n* VM -> StateManager: moved getAccount(), putAccount() and touchAccount() to BaseStateManager, made _debug a member variable of BaseStateManater\r\n\r\n* VM -> StateManager: moved deleteAccount(), getOriginalContractStorage(), clearOriginalStorageCache(), generateAccessList() to BaseStateManager, checkpoint(), commit(), revert() calls into super class\r\n\r\n* VM -> StateManager: use putAccount() in generateGenesis() in favor of direct trie access, move generateCanonicalGenesis(), generateGenesis() to BaseStateManager()\r\n\r\n* VM -> StateManager: moved generateGenesis() back to StateManager (direct trie access needed), moved EIP-2929 functionality (addWarmedAddress(),...) to BaseStateManager\r\n\r\n* VM -> StateManager: some cleanup\r\n\r\n* VM -> StateManager: flush cache in generateGenesis() call to allow for directly using the provided putAccount() method\r\n\r\n* VM -> StateManager: moved generateGenesis() to BaseStateManager\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-11-15T12:15:23+01:00",
          "tree_id": "fae56673038ab527efdf5a3b71ccd930a884de01",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/aec64d05230cc0dd7050d7bf072dca6178dc7b62"
        },
        "date": 1636975210357,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15165,
            "range": "±13.47%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16037,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10621,
            "range": "±15.97%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10871,
            "range": "±19.99%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14537,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1152,
            "range": "±7.58%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 96.17,
            "range": "±125.67%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±41.37%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.43,
            "range": "±126.33%",
            "unit": "ops/sec",
            "extra": "23 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0f9eed1c3740242b94f5dec996961ae53530de6",
          "message": "blockchain: Change toBuffer to toArrayLike for BNs (#1566)\n\n* blockchain: Change toBuffer to toArrayLike for BNs\r\n\r\n* update changelog",
          "timestamp": "2021-11-15T08:52:38-08:00",
          "tree_id": "2df420a8ce92786da2e805d34254e70d37aee457",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d0f9eed1c3740242b94f5dec996961ae53530de6"
        },
        "date": 1636995450757,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14753,
            "range": "±12.50%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16425,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10585,
            "range": "±16.05%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10769,
            "range": "±22.01%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14695,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1106,
            "range": "±7.33%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 112,
            "range": "±99.52%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±35.83%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.91,
            "range": "±122.56%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76a3b129183813a353fea28494083bc160d59778",
          "message": "blockchain: v5.5.1 release (#1567)\n\n* blockchain: prepare v5.5.1 release\r\n\r\n* client fix cli tape tests: prevent end being called more than once per suite",
          "timestamp": "2021-11-16T09:42:48+01:00",
          "tree_id": "b847e37280969c6170c66245f8b0b172e4392bc8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/76a3b129183813a353fea28494083bc160d59778"
        },
        "date": 1637052506134,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10176,
            "range": "±12.42%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12547,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11383,
            "range": "±3.92%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6622,
            "range": "±20.79%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11865,
            "range": "±8.37%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1105,
            "range": "±7.18%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 141,
            "range": "±83.45%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±11.05%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.54,
            "range": "±11.07%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb5240bec432b5c37f38fd5483483f805f24f234",
          "message": "block: point difficulty tests to ethereum-tests (#1571)\n\n* block: switch difficulty tests back to Eth-Tests\r\n* delete unused test data artifact\r\n* tidy\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-16T13:25:04-08:00",
          "tree_id": "5b6684bb90e396451beb00109ce12fbf09903708",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/eb5240bec432b5c37f38fd5483483f805f24f234"
        },
        "date": 1637098170598,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16819,
            "range": "±11.80%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18281,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10218,
            "range": "±21.18%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16430,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17651,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1251,
            "range": "±6.25%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 93.56,
            "range": "±115.42%",
            "unit": "ops/sec",
            "extra": "24 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±7.79%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.41,
            "range": "±111.94%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67ff9e822747b99b24686bb89be5b1814f0eef81",
          "message": "dedupe vm ci step (don't run test:API twice) (#1573)",
          "timestamp": "2021-11-17T12:41:53+01:00",
          "tree_id": "52926e430dad032d54816b1bb37aab826bfea6e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/67ff9e822747b99b24686bb89be5b1814f0eef81"
        },
        "date": 1637149625286,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11840,
            "range": "±14.40%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14580,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13444,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7402,
            "range": "±26.49%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14048,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1104,
            "range": "±6.98%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 127,
            "range": "±93.80%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±11.75%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.28,
            "range": "±116.73%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bccef10b73fda2373122a4109d1c2eb433bc2ead",
          "message": "Common: Add berlin/london hardforks to kovan (#1577)\n\n* Common: Add berlin/london hardforks to kovan\r\n\r\n* Update tests and fix forkhash",
          "timestamp": "2021-11-18T10:19:06+01:00",
          "tree_id": "3e6de769dc64d9c6092e894046c798e6e2fec453",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bccef10b73fda2373122a4109d1c2eb433bc2ead"
        },
        "date": 1637227482686,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10761,
            "range": "±15.47%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12423,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11054,
            "range": "±4.16%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6409,
            "range": "±19.78%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11929,
            "range": "±4.66%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1007,
            "range": "±8.25%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±70.57%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 117,
            "range": "±8.04%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.15,
            "range": "±107.72%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5e806508459fb4c633ac0e95bbadec841e2f365",
          "message": "Monorepo: correct license note (#1582)",
          "timestamp": "2021-11-22T12:49:41+01:00",
          "tree_id": "9c63e76b6bd78cf9f2cabe6a349b1ba4496df8a8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c5e806508459fb4c633ac0e95bbadec841e2f365"
        },
        "date": 1637582138443,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10663,
            "range": "±12.49%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12979,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11037,
            "range": "±4.55%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6247,
            "range": "±20.30%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13069,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1104,
            "range": "±7.11%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 135,
            "range": "±82.89%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 88.36,
            "range": "±52.53%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.81,
            "range": "±106.21%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ead38a9d77c6d123bfad48298d25a2b645d08778",
          "message": "fix buffer compare in demo script (#1584)",
          "timestamp": "2021-11-22T14:17:10-08:00",
          "tree_id": "5d07e54b61dd8c9925852e8a2d711dc3379e6150",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ead38a9d77c6d123bfad48298d25a2b645d08778"
        },
        "date": 1637619765218,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10212,
            "range": "±13.48%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12455,
            "range": "±3.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11459,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6266,
            "range": "±23.75%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12852,
            "range": "±4.52%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1014,
            "range": "±7.56%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±74.99%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±7.78%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.28,
            "range": "±10.12%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddf21a50302e13c957c2a6f07d8f23d5169718e1",
          "message": "monorepo, vm: remove npm vulnerabilities (#1579)\n\n* vm: update tap-spec package\r\n\r\n* monorepo: remove old npm-auth-to-token package\r\n\r\n* monorepo: fix npm login in e2e-publish script\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: cleanup in e2e-publish script\r\n\r\n* monorepo: remove unused npm login package\r\n\r\n* vm: remove tap-spec completely, make formatTest script generic",
          "timestamp": "2021-11-23T18:12:01+01:00",
          "tree_id": "3ce69ac9b55f53de626a8e70b17c6d34141194d0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ddf21a50302e13c957c2a6f07d8f23d5169718e1"
        },
        "date": 1637687835172,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14176,
            "range": "±12.64%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15647,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11109,
            "range": "±15.79%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12049,
            "range": "±21.68%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14634,
            "range": "±3.30%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1092,
            "range": "±7.41%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±102.29%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 102,
            "range": "±35.45%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 12.9,
            "range": "±107.93%",
            "unit": "ops/sec",
            "extra": "23 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d9c54e59ef5f17b06ffb4e0f3ba9e682eae6383",
          "message": "util, monorepo: update readme, fix coverage reports (#1585)\n\n* util: update readme\r\n\r\n* fix missing coverage reports\r\n\r\n* update to codecov-action@v2\r\nupdate coverage cmd to inline reporters (no need for separate .nyc_output lcov output as the coverage dir is used)\r\n\r\n* codecov: try running with `cache: false` so it doesn't pick up node_modules cache",
          "timestamp": "2021-11-24T19:09:53+01:00",
          "tree_id": "0e21bb6875ca9f8dabf46493dfbb6073c50e60e3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9d9c54e59ef5f17b06ffb4e0f3ba9e682eae6383"
        },
        "date": 1637777717649,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10892,
            "range": "±15.47%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12643,
            "range": "±3.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11614,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6253,
            "range": "±22.48%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12780,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1093,
            "range": "±7.43%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±79.43%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 107,
            "range": "±25.85%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23,
            "range": "±11.07%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "595f4560a0ffbac6c0787fb25310ddac597b8d32",
          "message": "Update ethereum-tests to v10.2 (#1568)\n\n* Point block difficulty tests to ethereum-tests, remove local dups, and update ethereum tests\r\n* Move uncle hash check to test runner\r\n* Update tx test runner to latest\r\n* Partial leading zero fixes\r\n* block: lint fix\r\n* Remove duplicate test data artifact\r\n* guard against leading zeroes and implement eip2681\r\n* tx: remaining eth-test fixes\r\n* tx: lint fix\r\n* Additional checks for tx tests\r\n* tx: fix clean-up\r\n* Implement EIP-3607\r\n* vm: remove outdated state update on state test failure\r\n* Update packages/tx/src/baseTransaction.ts\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\n* Check correct codeHash field\r\n* fix nits\r\n* Fix EIp3607 check\r\n* Requested formatting changes\r\n* vm: change codehash comparison to empty buffer instead of string\r\n* tx: Fix erroneous nonce to gasLimit\r\n* Update Eth-Tests to 10.2 and tx fixes\r\n* vm: use correct buffer comparison\r\n* Fix leading zero check\r\n* Fix leading zero check in 2930/1559 transactions\r\n* Fix invalid signature test\r\n* Replace 0x00 with 0x in test data\r\n* tx, util: rework logic for checking leading zeroes\r\n* lint fixes\r\n* util: Add test for new hasLeadingZeroes helper\r\n* Remove duplicate checks for EIP1559\r\n* tx: add tests for leading zeroes check\r\n* tx: remove duplicate leading zero check\r\n* Move leadingZeroes check to Tx/util.ts\r\n* Add missing import\r\n* Updates to leadingZeroes test and 2^64 nonce check\r\n* Move validateNoLeadingZeroes back to util\r\n* update leadingZeros function description\r\n* tidy:\r\n - remove unneeded RlpValues type (inlined in the function method)\r\n - generalize validateCannotExceedMaxInteger and remove 53 bits options (was actually using 256 instead of 53)\r\n* tidy, adjust EIP-2681 implementation so value cannot also equal 2^64-1\r\n* Break out leading zeroes test by value\r\n* Add tests for missing code coverage\r\n* Add check for integer overflow in EIP1559 and fix test\r\n* Lint fixes\r\n* Requested change\r\n* Consistency in integer overflow checks\r\n* Remove \"unnecessary semicolons\"\r\n* Add es-disable to fix semicolon complaining\r\n* Add coverage for all branches of maxInt test\r\n* Remove extra spaces\r\n* last nits\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-12-01T18:36:19-08:00",
          "tree_id": "f295898eb33fa7ffb8ea2e116ee38d30e02a3149",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/595f4560a0ffbac6c0787fb25310ddac597b8d32"
        },
        "date": 1638413174567,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13373,
            "range": "±12.40%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14426,
            "range": "±2.47%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12156,
            "range": "±7.44%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5526,
            "range": "±29.86%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13552,
            "range": "±4.21%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1072,
            "range": "±8.24%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±86.85%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 104,
            "range": "±24.19%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.58,
            "range": "±113.82%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcaceaf4f0792cec6302fba2abfae095de091fbf",
          "message": "client: fix libp2p sync and browser example (#1588)\n\n* fix webpack polyfills: buffer, process/browser\r\n* fix browser sync example\r\n* remove premature PEER_CONNECTED\r\n* parse bootnodes, set consistent chainDB\r\n* tidy libp2p files and other small fixes\r\n* remove index_old.ts\r\n* fix spec test (add anythng() matcher for new boolean param)\r\n* move client event handlers to client module\r\nrefactor some cli logic to own functions (helprpc, inputAccounts, setupDev)\r\n* align headerfetcher/blockfetcher logic, small grammar adjustments of log messages\r\n* add `string: true` to `unlock` arg so it doesn't get converted to a number\r\n* Libp2pserver test additions\r\n* further tidying of cli.ts\r\n* grammar (on -> in)\r\n* Add more lightsync tests\r\n* Add new blockfetcher store tests\r\n* Add blockfetcher tests for store method\r\n* Add header fetcher tests\r\n* use different input values for `td.when` rather than using `td.reset`\r\n* Add fetcher test for queue inserts\r\n* remove extraneous debug import\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-12-01T18:59:10-08:00",
          "tree_id": "91b48de559fdc27f96a1d7ec5c70b1e0c1df3561",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fcaceaf4f0792cec6302fba2abfae095de091fbf"
        },
        "date": 1638414344860,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13653,
            "range": "±13.16%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14735,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12024,
            "range": "±7.35%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7060,
            "range": "±23.44%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13838,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1109,
            "range": "±7.71%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 107,
            "range": "±83.28%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±35.39%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.08,
            "range": "±118.80%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d518e9832f6374050cff7a92e5a38146485f77a3",
          "message": "Ethtests 10.2 cleanup items (#1593)\n\n* tx: make integer overflow error more clear\r\n* util: add examples to leadingZeroes helper\r\n* vm: add error message clarification",
          "timestamp": "2021-12-05T16:52:10-05:00",
          "tree_id": "0bff3b457db3e8e31fdedfcc8bdc73679cccd98b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d518e9832f6374050cff7a92e5a38146485f77a3"
        },
        "date": 1638741421209,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15017,
            "range": "±13.62%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16543,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 8928,
            "range": "±23.96%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14984,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15926,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1115,
            "range": "±7.54%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 112,
            "range": "±103.78%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 116,
            "range": "±19.29%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.35,
            "range": "±125.63%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c74035e12765ab4bce8cb2bead634e2887af0d7c",
          "message": "client: fix broken link in client example (#1594)",
          "timestamp": "2021-12-06T09:27:53-08:00",
          "tree_id": "15ff7a2d75f23bd81d6f53fccc6da7e1473388f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c74035e12765ab4bce8cb2bead634e2887af0d7c"
        },
        "date": 1638811964885,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15136,
            "range": "±10.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16739,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12159,
            "range": "±15.15%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10030,
            "range": "±21.24%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15617,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1161,
            "range": "±6.75%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 112,
            "range": "±109.96%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 94.68,
            "range": "±56.09%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 28.55,
            "range": "±15.39%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "164989bfcb54e330f36ca71fde117fd8bd1725b1",
          "message": "fix client error logging: add top level `format` to createLogger (#1595)",
          "timestamp": "2021-12-06T17:24:30-08:00",
          "tree_id": "452409a46524a275c1e5da9bce31f82a7f3a9f94",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/164989bfcb54e330f36ca71fde117fd8bd1725b1"
        },
        "date": 1638840596252,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11262,
            "range": "±12.99%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13078,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12159,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7317,
            "range": "±21.85%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12633,
            "range": "±4.23%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1086,
            "range": "±7.08%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 140,
            "range": "±85.93%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 107,
            "range": "±29.28%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.64,
            "range": "±132.40%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bffbc0385d0aef62097fd1bffeb9abdecdaa344d",
          "message": "Implement eth_getProof (#1590)\n\n* vm: start on getProof\r\n\r\n* vm: stateManager: add getProof EIP-1186\r\n\r\n* vm: stateManager: add verifyProof\r\n\r\n* vm: add getProof tests\r\n\r\n* vm: start on getProof\r\n\r\n* vm: stateManager: add getProof EIP-1186\r\n\r\n* vm: stateManager: add verifyProof\r\n\r\n* vm: move changes of old state manager into new one\r\n\r\n* vm: fix proof test\r\n\r\n* vm: make getProof better readable\r\n\r\n* vm: stateManager cleanup verifyProof\r\n\r\n* vm: make proof/verifyproof optional\r\n\r\n* stateManager: add ropsten stateManager tests\r\nstateManager: fix getProof EIP1178 field\r\n\r\n* stateManager: more getProof tests / ensure geth compatibility\r\n\r\n* stateManager: partially fix verifyProof\r\n\r\n* stateManager: fix empty account proofs\r\nstateManager: fix storage slot proofs\r\n\r\n* stateManager: add tests for tampered proofs\r\n\r\n* stateManager: use Proof type of stateManage not MPT\r\n\r\n* client: add getProof endpoint\r\nclient: add tests for getProof\r\n\r\n* vm: state: update interface\r\n\r\n* review - vm:\r\n  * bolster invalid proof error messages\r\n  * extract ProofStateManager tests to own file\r\n  * move testdata files to own folder and use import syntax for improved type info\r\n\r\n* review - client:\r\n  * already have array validator (usage: `validators.array(validators.hex)`)\r\n  * add typedoc for getProof (thanks @gabrocheleau)\r\n  * update getProof.spec.ts to match future test setup from PR #1598 (this slightly modifies the returned accountProof)\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-12-09T14:22:12+01:00",
          "tree_id": "369d5ed330f213b86dd19771eea1418870b705c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bffbc0385d0aef62097fd1bffeb9abdecdaa344d"
        },
        "date": 1639056423045,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13561,
            "range": "±12.91%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14115,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12377,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5765,
            "range": "±22.43%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12862,
            "range": "±4.08%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1018,
            "range": "±8.68%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 111,
            "range": "±101.40%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 106,
            "range": "±22.98%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.19,
            "range": "±117.09%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22bc187f9e98f64756452bb065e3dfc64cb805a4",
          "message": "VM: address consensus issue: tx goes OOG but refunds get applied anyways (#1603)\n\n* vm: add consensus bug test\r\n* vm: fix invalid selfdestructs when code deposit gas cannot be paid (upcoming ethereum/tests CreateOOGFromEOARefunds_d13g0v0)",
          "timestamp": "2021-12-11T00:24:19-08:00",
          "tree_id": "a76b900d99c4a13ddff1190169979678016a19c6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/22bc187f9e98f64756452bb065e3dfc64cb805a4"
        },
        "date": 1639211317787,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18224,
            "range": "±11.92%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19006,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11357,
            "range": "±22.65%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15754,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 16656,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1258,
            "range": "±6.12%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 83.95,
            "range": "±112.44%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 145,
            "range": "±6.60%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.54,
            "range": "±134.11%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe50f4eba89ea662696da7e0e0d8df2df9a0effd",
          "message": "client: allow past block numbers in RPC queries (#1598)\n\n* client: allow block number arg in rpc\r\n\r\n* client rpc: simplify result comparisons\r\n\r\n* add getProof\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-12-14T20:06:40+01:00",
          "tree_id": "bb96c21ed401295dca98c5c1649de7523f8d8796",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fe50f4eba89ea662696da7e0e0d8df2df9a0effd"
        },
        "date": 1639509104358,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15350,
            "range": "±12.24%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16618,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11724,
            "range": "±16.13%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10037,
            "range": "±27.13%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15987,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1127,
            "range": "±7.43%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 112,
            "range": "±104.72%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 88.09,
            "range": "±57.87%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.82,
            "range": "±124.54%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d390b9b4d9182e27f9f131c83615392a4c5378b6",
          "message": "Finish EIP-2681 (#1608)\n\n* vm: add nonce check for CREATE/CREATE2 opcodes of the creating contract\r\n\r\n* vm: add EIP2681 test for CREATE opcode\r\n\r\n* vm: eei: add EIP-2681 comment\r\n\r\n* vm: eip-2681: change eq to gte for better safety\r\n\r\n* vm: update test comment for EIP-2681\r\n\r\n* lint fixes\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-12-15T19:31:15+01:00",
          "tree_id": "9e47dce77b749098ad6865377a638c9ca6da7db9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d390b9b4d9182e27f9f131c83615392a4c5378b6"
        },
        "date": 1639593408300,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10376,
            "range": "±11.08%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10659,
            "range": "±14.63%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10642,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8618,
            "range": "±12.06%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7096,
            "range": "±27.06%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 991,
            "range": "±8.33%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 137,
            "range": "±68.58%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 86.12,
            "range": "±48.90%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.3,
            "range": "±99.86%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59f103eb796d7caa10775288db6f682a5f18210e",
          "message": "tx/vm/util: throw when provided negative BN (#1606)\n\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-12-15T16:26:51-05:00",
          "tree_id": "e022aef64332355183fd782dce6ec6646efcb23a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/59f103eb796d7caa10775288db6f682a5f18210e"
        },
        "date": 1639603879834,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16980,
            "range": "±12.31%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18194,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10495,
            "range": "±19.78%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16300,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 16932,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1216,
            "range": "±7.19%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 79.78,
            "range": "±146.32%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 124,
            "range": "±21.13%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.98,
            "range": "±108.60%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c7bdfcdf5866fc31df2b87508156f3294bbae45",
          "message": "eslint: disable no-extra-semi, remove overrides (#1613)",
          "timestamp": "2021-12-15T16:49:16-08:00",
          "tree_id": "61b44daaa86e65b37454ab64cd2286c593a0faf6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0c7bdfcdf5866fc31df2b87508156f3294bbae45"
        },
        "date": 1639616084120,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10044,
            "range": "±13.06%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11787,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11153,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7363,
            "range": "±19.01%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9421,
            "range": "±24.71%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1014,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 134,
            "range": "±76.62%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±7.69%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.18,
            "range": "±105.34%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3751bbd68a6f20c620c03d874abd1e2ea0895f50",
          "message": "common/vm: add EIP-3855, PUSH0 instruction (#1616)\n\n* common/vm: add EIP-3855, PUSH0 instruction\r\n\r\n* vm: remove breaking changes from runCode",
          "timestamp": "2021-12-28T00:11:26+01:00",
          "tree_id": "4d8c46e93e50b7d7c014a97373c6a09c9b9dde6e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3751bbd68a6f20c620c03d874abd1e2ea0895f50"
        },
        "date": 1640646944420,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18072,
            "range": "±12.46%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19542,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11947,
            "range": "±27.32%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16672,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18289,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1251,
            "range": "±5.93%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±119.54%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 144,
            "range": "±6.64%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.06,
            "range": "±123.64%",
            "unit": "ops/sec",
            "extra": "14 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23a7f35c471d7bc3797b3452d9be0947000b6102",
          "message": "common: add support for new Sepolia chain (#1581)\n\n* common: add support for new Sepolia chain\r\n* common: updates in sepolia.json chain config\r\n* common: sepolia configuration fixes\r\n* add initialBaseFee logic to block header constructor\r\n* block: improve londonHfBlock var name for clarity\r\n* common: add require for sepolia genesisStates\r\n* block: fix tests with initialBaseFeePerGas\r\n* use Hardfork enum\r\n* organize test util code\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-01-03T12:35:17-08:00",
          "tree_id": "acc420dc74431f4b3f2b415467635dceff83e39f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/23a7f35c471d7bc3797b3452d9be0947000b6102"
        },
        "date": 1641242406503,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14255,
            "range": "±12.95%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16201,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11288,
            "range": "±16.87%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9640,
            "range": "±30.61%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15772,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1285,
            "range": "±5.99%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 102,
            "range": "±103.67%",
            "unit": "ops/sec",
            "extra": "24 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 145,
            "range": "±6.43%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.27,
            "range": "±63.18%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03b69e283e1828894801fec625701c78588214a3",
          "message": "Add fallback for node constants (#1621)",
          "timestamp": "2022-01-04T15:43:43-08:00",
          "tree_id": "e3d2232c6cc0d38ab1bf9fcc48d150348569701b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/03b69e283e1828894801fec625701c78588214a3"
        },
        "date": 1641340142326,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11051,
            "range": "±14.09%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12588,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12505,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7001,
            "range": "±25.42%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13538,
            "range": "±3.86%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1118,
            "range": "±7.32%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 131,
            "range": "±88.82%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±13.64%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.32,
            "range": "±106.84%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b419be6c170a1368cc2d83e8a5f357d0bab6ec1",
          "message": "vm: fix examples (#1623)",
          "timestamp": "2022-01-06T20:42:00-08:00",
          "tree_id": "5301d5472694c4aafe04023dc8a9005bc62058ad",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3b419be6c170a1368cc2d83e8a5f357d0bab6ec1"
        },
        "date": 1641530848994,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10810,
            "range": "±12.46%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12404,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11406,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6243,
            "range": "±24.05%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12349,
            "range": "±4.73%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 992,
            "range": "±8.25%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 118,
            "range": "±68.83%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 94.81,
            "range": "±26.76%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.53,
            "range": "±99.46%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf0bab303856263c2d19d0b64a078f69b4a72d52",
          "message": "ci: upgrade node to v16 (#1624)\n\n* ci: upgrade node to v16 (which includes npm v7+ by default)\r\n* devp2p: _peerStatus type fix\r\n* util: spec type fix\r\n* update package-lock\r\n* vm: fix type error\r\n* client: exclude null type to fix type error",
          "timestamp": "2022-01-10T09:34:33-08:00",
          "tree_id": "63a7e75cfa7859e4a83750041929c811b1b3f35e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cf0bab303856263c2d19d0b64a078f69b4a72d52"
        },
        "date": 1641836417995,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13048,
            "range": "±14.36%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10193,
            "range": "±18.31%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15103,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13109,
            "range": "±11.03%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4435,
            "range": "±5.43%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 585,
            "range": "±20.83%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 173,
            "range": "±10.77%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 34.4,
            "range": "±120.40%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13,
            "range": "±29.01%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b08f9f3c2429193ed0f925e8119b76a3d80d7bc",
          "message": "Update ethereum/tests to v10.3 (#1625)",
          "timestamp": "2022-01-10T16:37:26-05:00",
          "tree_id": "ddb97eaba6489190900aafdc644ae94cde74c3e5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1b08f9f3c2429193ed0f925e8119b76a3d80d7bc"
        },
        "date": 1641851214754,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12601,
            "range": "±13.15%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10212,
            "range": "±17.84%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14647,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13673,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5048,
            "range": "±10.76%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 545,
            "range": "±16.54%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 172,
            "range": "±11.51%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 45.33,
            "range": "±101.72%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.24,
            "range": "±23.98%",
            "unit": "ops/sec",
            "extra": "34 samples"
          }
        ]
      }
    ]
  }
}