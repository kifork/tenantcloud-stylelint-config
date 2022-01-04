# tenantcloud-stylelint-scss-config
> This is the default config file for stylelint from [TenantCloud](https://www.tenantcloud.com/).

Use it as is or as a basis for your own configuration.

## Installation

```bash
npm install tenantcloud-stylelint-scss-config --save-dev
```

## Usage

If your project does not already have stylelint, then in the root of the project create the file `.stylelintrc`, or with the extension` .stylelintrc.js` so that the code editor can highlight the syntax.

Then add `tenantcloud-stylelint-scss-config` to the` .stylelintrc` config file.

_.stylelintrc_
```json
{
  "extends": "tenantcloud-stylelint-scss-config"
}
```

If you have installed `tenantcloud-stylelint-scss-config` globally using the` -g` flag, then you need to use the absolute path of `tenantcloud-stylelint-scss-config` in the config file:


_.stylelintrc_
```json
{
  "extends": "/absolute/path/to/tenantcloud-stylelint-scss-config"
}
```

## Expanding the config

You can override existing rules or add new ones.

To do this, add the `" rules "` key to the config right after `" extends ":" tenantcloud-stylelint-scss-config "`, and then add your own rules.

_.stylelintrc_
```json
{
  "extends": "tenantcloud-stylelint-scss-config",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null,
    "property-no-unknown": [ true, {
      "ignoreProperties": [
        "composes"
      ]
    }],
    "unit-whitelist": ["em", "rem", "s", "px"]
  }
}
```

## Usage in VSCode

1. Open VScode
2. Install plugin [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
3. Use
4. If your code does not comply with the rules of `tenantcloud-stylelint-scss-config` it will be underlined with a red line.

![](vscode-error.png)

_ in the example, the rule `'color-named': 'never'` was triggered, which prohibits the use of colors by name_
