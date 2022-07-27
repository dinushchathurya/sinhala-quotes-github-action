<!-- start quote -->
💬 Quote of the Day: "ඔබට නිසි වටිනාකම නොලැබෙන තැන් වලින් ගෞරවාන්විතව නික්මීමට තරම් කාරුණික වන්න"
<!-- end quote -->

# Sinhala Quote of the day

## Example usage

1. Add the following lines in the file where quote will be updated.
```
<!-- start quote --> 

<!--- end quote -->
```

2. Create Workflow

```
name: Update README with Sinhala Quote

on:
  workflow_dispatch:
  schedule:
  - cron: "0 0 * * *" # triggers every midnight

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Check out repo
      uses: actions/checkout@v2

    - name: Use Node
      uses: actions/setup-node@v2
      with:
        node-version: '14.x'

    - name: Install node dependencies
      run: npm install

    - name: Sinhala Quote Of The Day
      uses: dinushchathurya/sinhala-quotes-github-action@1.0.1
    
    - name: Commit and push update
      run: |-
        git config --global user.email "sinhalaquotes@action.com"
        git config --global user.name "Quote-Bot"
        git add -A
        git commit -m "Added Sinhala QOTD from GitHub Actions"
        git push



```
