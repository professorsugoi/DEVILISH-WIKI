# Docs

Directories for new categories should include a `_category_.json` file:

```
*
└── folder/
    ├── _category_.json
    ├── file1.md
    ├── file2.md
    └── file3.mdx
```

The `.json` contents should look like this:

```json
{
	"label": "Category Name",
	"position": 3,
	"link": {
		"type": "generated-index"
	}
}
```
