globalThis.process ??= {};
globalThis.process.env ??= {};
const entityKind = /* @__PURE__ */ Symbol.for("drizzle:entityKind");
const hasOwnEntityKind = /* @__PURE__ */ Symbol.for("drizzle:hasOwnEntityKind");
function is(value, type) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (value instanceof type) {
    return true;
  }
  if (!Object.prototype.hasOwnProperty.call(type, entityKind)) {
    throw new Error(
      `Class "${type.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`
    );
  }
  let cls = Object.getPrototypeOf(value).constructor;
  if (cls) {
    while (cls) {
      if (entityKind in cls && cls[entityKind] === type[entityKind]) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
}
class Column {
  constructor(table, config) {
    this.table = table;
    this.config = config;
    this.name = config.name;
    this.keyAsName = config.keyAsName;
    this.notNull = config.notNull;
    this.default = config.default;
    this.defaultFn = config.defaultFn;
    this.onUpdateFn = config.onUpdateFn;
    this.hasDefault = config.hasDefault;
    this.primary = config.primaryKey;
    this.isUnique = config.isUnique;
    this.uniqueName = config.uniqueName;
    this.uniqueType = config.uniqueType;
    this.dataType = config.dataType;
    this.columnType = config.columnType;
    this.generated = config.generated;
    this.generatedIdentity = config.generatedIdentity;
  }
  static [entityKind] = "Column";
  name;
  keyAsName;
  primary;
  notNull;
  default;
  defaultFn;
  onUpdateFn;
  hasDefault;
  isUnique;
  uniqueName;
  uniqueType;
  dataType;
  columnType;
  enumValues = void 0;
  generated = void 0;
  generatedIdentity = void 0;
  config;
  mapFromDriverValue(value) {
    return value;
  }
  mapToDriverValue(value) {
    return value;
  }
  // ** @internal */
  shouldDisableInsert() {
    return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
  }
}
class ColumnBuilder {
  static [entityKind] = "ColumnBuilder";
  config;
  constructor(name2, dataType, columnType) {
    this.config = {
      name: name2,
      keyAsName: name2 === "",
      notNull: false,
      default: void 0,
      hasDefault: false,
      primaryKey: false,
      isUnique: false,
      uniqueName: void 0,
      uniqueType: void 0,
      dataType,
      columnType,
      generated: void 0
    };
  }
  /**
   * Changes the data type of the column. Commonly used with `json` columns. Also, useful for branded types.
   *
   * @example
   * ```ts
   * const users = pgTable('users', {
   * 	id: integer('id').$type<UserId>().primaryKey(),
   * 	details: json('details').$type<UserDetails>().notNull(),
   * });
   * ```
   */
  $type() {
    return this;
  }
  /**
   * Adds a `not null` clause to the column definition.
   *
   * Affects the `select` model of the table - columns *without* `not null` will be nullable on select.
   */
  notNull() {
    this.config.notNull = true;
    return this;
  }
  /**
   * Adds a `default <value>` clause to the column definition.
   *
   * Affects the `insert` model of the table - columns *with* `default` are optional on insert.
   *
   * If you need to set a dynamic default value, use {@link $defaultFn} instead.
   */
  default(value) {
    this.config.default = value;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Adds a dynamic default value to the column.
   * The function will be called when the row is inserted, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $defaultFn(fn) {
    this.config.defaultFn = fn;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Alias for {@link $defaultFn}.
   */
  $default = this.$defaultFn;
  /**
   * Adds a dynamic update value to the column.
   * The function will be called when the row is updated, and the returned value will be used as the column value if none is provided.
   * If no `default` (or `$defaultFn`) value is provided, the function will be called when the row is inserted as well, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $onUpdateFn(fn) {
    this.config.onUpdateFn = fn;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Alias for {@link $onUpdateFn}.
   */
  $onUpdate = this.$onUpdateFn;
  /**
   * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
   *
   * In SQLite, `integer primary key` implicitly makes the column auto-incrementing.
   */
  primaryKey() {
    this.config.primaryKey = true;
    this.config.notNull = true;
    return this;
  }
  /** @internal Sets the name of the column to the key within the table definition if a name was not given. */
  setName(name2) {
    if (this.config.name !== "") return;
    this.config.name = name2;
  }
}
const TableName = /* @__PURE__ */ Symbol.for("drizzle:Name");
const isPgEnumSym = /* @__PURE__ */ Symbol.for("drizzle:isPgEnum");
function isPgEnum(obj) {
  return !!obj && typeof obj === "function" && isPgEnumSym in obj && obj[isPgEnumSym] === true;
}
class Subquery {
  static [entityKind] = "Subquery";
  constructor(sql2, fields, alias, isWith = false, usedTables = []) {
    this._ = {
      brand: "Subquery",
      sql: sql2,
      selectedFields: fields,
      alias,
      isWith,
      usedTables
    };
  }
  // getSQL(): SQL<unknown> {
  // 	return new SQL([this]);
  // }
}
class WithSubquery extends Subquery {
  static [entityKind] = "WithSubquery";
}
const tracer = {
  startActiveSpan(name2, fn) {
    {
      return fn();
    }
  }
};
const ViewBaseConfig = /* @__PURE__ */ Symbol.for("drizzle:ViewBaseConfig");
const Schema = /* @__PURE__ */ Symbol.for("drizzle:Schema");
const Columns = /* @__PURE__ */ Symbol.for("drizzle:Columns");
const ExtraConfigColumns = /* @__PURE__ */ Symbol.for("drizzle:ExtraConfigColumns");
const OriginalName = /* @__PURE__ */ Symbol.for("drizzle:OriginalName");
const BaseName = /* @__PURE__ */ Symbol.for("drizzle:BaseName");
const IsAlias = /* @__PURE__ */ Symbol.for("drizzle:IsAlias");
const ExtraConfigBuilder = /* @__PURE__ */ Symbol.for("drizzle:ExtraConfigBuilder");
const IsDrizzleTable = /* @__PURE__ */ Symbol.for("drizzle:IsDrizzleTable");
class Table {
  static [entityKind] = "Table";
  /** @internal */
  static Symbol = {
    Name: TableName,
    Schema,
    OriginalName,
    Columns,
    ExtraConfigColumns,
    BaseName,
    IsAlias,
    ExtraConfigBuilder
  };
  /**
   * @internal
   * Can be changed if the table is aliased.
   */
  [TableName];
  /**
   * @internal
   * Used to store the original name of the table, before any aliasing.
   */
  [OriginalName];
  /** @internal */
  [Schema];
  /** @internal */
  [Columns];
  /** @internal */
  [ExtraConfigColumns];
  /**
   *  @internal
   * Used to store the table name before the transformation via the `tableCreator` functions.
   */
  [BaseName];
  /** @internal */
  [IsAlias] = false;
  /** @internal */
  [IsDrizzleTable] = true;
  /** @internal */
  [ExtraConfigBuilder] = void 0;
  constructor(name2, schema2, baseName) {
    this[TableName] = this[OriginalName] = name2;
    this[Schema] = schema2;
    this[BaseName] = baseName;
  }
}
function isTable(table) {
  return typeof table === "object" && table !== null && IsDrizzleTable in table;
}
function getTableName(table) {
  return table[TableName];
}
function getTableUniqueName(table) {
  return `${table[Schema] ?? "public"}.${table[TableName]}`;
}
class FakePrimitiveParam {
  static [entityKind] = "FakePrimitiveParam";
}
function isSQLWrapper(value) {
  return value !== null && value !== void 0 && typeof value.getSQL === "function";
}
function mergeQueries(queries) {
  const result = { sql: "", params: [] };
  for (const query of queries) {
    result.sql += query.sql;
    result.params.push(...query.params);
    if (query.typings?.length) {
      if (!result.typings) {
        result.typings = [];
      }
      result.typings.push(...query.typings);
    }
  }
  return result;
}
class StringChunk {
  static [entityKind] = "StringChunk";
  value;
  constructor(value) {
    this.value = Array.isArray(value) ? value : [value];
  }
  getSQL() {
    return new SQL([this]);
  }
}
class SQL {
  constructor(queryChunks) {
    this.queryChunks = queryChunks;
    for (const chunk of queryChunks) {
      if (is(chunk, Table)) {
        const schemaName = chunk[Table.Symbol.Schema];
        this.usedTables.push(
          schemaName === void 0 ? chunk[Table.Symbol.Name] : schemaName + "." + chunk[Table.Symbol.Name]
        );
      }
    }
  }
  static [entityKind] = "SQL";
  /** @internal */
  decoder = noopDecoder;
  shouldInlineParams = false;
  /** @internal */
  usedTables = [];
  append(query) {
    this.queryChunks.push(...query.queryChunks);
    return this;
  }
  toQuery(config) {
    return tracer.startActiveSpan("drizzle.buildSQL", (span) => {
      const query = this.buildQueryFromSourceParams(this.queryChunks, config);
      span?.setAttributes({
        "drizzle.query.text": query.sql,
        "drizzle.query.params": JSON.stringify(query.params)
      });
      return query;
    });
  }
  buildQueryFromSourceParams(chunks, _config) {
    const config = Object.assign({}, _config, {
      inlineParams: _config.inlineParams || this.shouldInlineParams,
      paramStartIndex: _config.paramStartIndex || { value: 0 }
    });
    const {
      casing,
      escapeName,
      escapeParam,
      prepareTyping,
      inlineParams,
      paramStartIndex
    } = config;
    return mergeQueries(chunks.map((chunk) => {
      if (is(chunk, StringChunk)) {
        return { sql: chunk.value.join(""), params: [] };
      }
      if (is(chunk, Name)) {
        return { sql: escapeName(chunk.value), params: [] };
      }
      if (chunk === void 0) {
        return { sql: "", params: [] };
      }
      if (Array.isArray(chunk)) {
        const result = [new StringChunk("(")];
        for (const [i, p] of chunk.entries()) {
          result.push(p);
          if (i < chunk.length - 1) {
            result.push(new StringChunk(", "));
          }
        }
        result.push(new StringChunk(")"));
        return this.buildQueryFromSourceParams(result, config);
      }
      if (is(chunk, SQL)) {
        return this.buildQueryFromSourceParams(chunk.queryChunks, {
          ...config,
          inlineParams: inlineParams || chunk.shouldInlineParams
        });
      }
      if (is(chunk, Table)) {
        const schemaName = chunk[Table.Symbol.Schema];
        const tableName = chunk[Table.Symbol.Name];
        return {
          sql: schemaName === void 0 || chunk[IsAlias] ? escapeName(tableName) : escapeName(schemaName) + "." + escapeName(tableName),
          params: []
        };
      }
      if (is(chunk, Column)) {
        const columnName = casing.getColumnCasing(chunk);
        if (_config.invokeSource === "indexes") {
          return { sql: escapeName(columnName), params: [] };
        }
        const schemaName = chunk.table[Table.Symbol.Schema];
        return {
          sql: chunk.table[IsAlias] || schemaName === void 0 ? escapeName(chunk.table[Table.Symbol.Name]) + "." + escapeName(columnName) : escapeName(schemaName) + "." + escapeName(chunk.table[Table.Symbol.Name]) + "." + escapeName(columnName),
          params: []
        };
      }
      if (is(chunk, View)) {
        const schemaName = chunk[ViewBaseConfig].schema;
        const viewName = chunk[ViewBaseConfig].name;
        return {
          sql: schemaName === void 0 || chunk[ViewBaseConfig].isAlias ? escapeName(viewName) : escapeName(schemaName) + "." + escapeName(viewName),
          params: []
        };
      }
      if (is(chunk, Param)) {
        if (is(chunk.value, Placeholder)) {
          return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk], typings: ["none"] };
        }
        const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
        if (is(mappedValue, SQL)) {
          return this.buildQueryFromSourceParams([mappedValue], config);
        }
        if (inlineParams) {
          return { sql: this.mapInlineParam(mappedValue, config), params: [] };
        }
        let typings = ["none"];
        if (prepareTyping) {
          typings = [prepareTyping(chunk.encoder)];
        }
        return { sql: escapeParam(paramStartIndex.value++, mappedValue), params: [mappedValue], typings };
      }
      if (is(chunk, Placeholder)) {
        return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk], typings: ["none"] };
      }
      if (is(chunk, SQL.Aliased) && chunk.fieldAlias !== void 0) {
        return { sql: escapeName(chunk.fieldAlias), params: [] };
      }
      if (is(chunk, Subquery)) {
        if (chunk._.isWith) {
          return { sql: escapeName(chunk._.alias), params: [] };
        }
        return this.buildQueryFromSourceParams([
          new StringChunk("("),
          chunk._.sql,
          new StringChunk(") "),
          new Name(chunk._.alias)
        ], config);
      }
      if (isPgEnum(chunk)) {
        if (chunk.schema) {
          return { sql: escapeName(chunk.schema) + "." + escapeName(chunk.enumName), params: [] };
        }
        return { sql: escapeName(chunk.enumName), params: [] };
      }
      if (isSQLWrapper(chunk)) {
        if (chunk.shouldOmitSQLParens?.()) {
          return this.buildQueryFromSourceParams([chunk.getSQL()], config);
        }
        return this.buildQueryFromSourceParams([
          new StringChunk("("),
          chunk.getSQL(),
          new StringChunk(")")
        ], config);
      }
      if (inlineParams) {
        return { sql: this.mapInlineParam(chunk, config), params: [] };
      }
      return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk], typings: ["none"] };
    }));
  }
  mapInlineParam(chunk, { escapeString }) {
    if (chunk === null) {
      return "null";
    }
    if (typeof chunk === "number" || typeof chunk === "boolean") {
      return chunk.toString();
    }
    if (typeof chunk === "string") {
      return escapeString(chunk);
    }
    if (typeof chunk === "object") {
      const mappedValueAsString = chunk.toString();
      if (mappedValueAsString === "[object Object]") {
        return escapeString(JSON.stringify(chunk));
      }
      return escapeString(mappedValueAsString);
    }
    throw new Error("Unexpected param value: " + chunk);
  }
  getSQL() {
    return this;
  }
  as(alias) {
    if (alias === void 0) {
      return this;
    }
    return new SQL.Aliased(this, alias);
  }
  mapWith(decoder) {
    this.decoder = typeof decoder === "function" ? { mapFromDriverValue: decoder } : decoder;
    return this;
  }
  inlineParams() {
    this.shouldInlineParams = true;
    return this;
  }
  /**
   * This method is used to conditionally include a part of the query.
   *
   * @param condition - Condition to check
   * @returns itself if the condition is `true`, otherwise `undefined`
   */
  if(condition) {
    return condition ? this : void 0;
  }
}
class Name {
  constructor(value) {
    this.value = value;
  }
  static [entityKind] = "Name";
  brand;
  getSQL() {
    return new SQL([this]);
  }
}
function name(value) {
  return new Name(value);
}
function isDriverValueEncoder(value) {
  return typeof value === "object" && value !== null && "mapToDriverValue" in value && typeof value.mapToDriverValue === "function";
}
const noopDecoder = {
  mapFromDriverValue: (value) => value
};
const noopEncoder = {
  mapToDriverValue: (value) => value
};
const noopMapper = {
  ...noopDecoder,
  ...noopEncoder
};
class Param {
  /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */
  constructor(value, encoder = noopEncoder) {
    this.value = value;
    this.encoder = encoder;
  }
  static [entityKind] = "Param";
  brand;
  getSQL() {
    return new SQL([this]);
  }
}
function param(value, encoder) {
  return new Param(value, encoder);
}
function sql(strings, ...params) {
  const queryChunks = [];
  if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
    queryChunks.push(new StringChunk(strings[0]));
  }
  for (const [paramIndex, param2] of params.entries()) {
    queryChunks.push(param2, new StringChunk(strings[paramIndex + 1]));
  }
  return new SQL(queryChunks);
}
((sql2) => {
  function empty() {
    return new SQL([]);
  }
  sql2.empty = empty;
  function fromList(list) {
    return new SQL(list);
  }
  sql2.fromList = fromList;
  function raw(str) {
    return new SQL([new StringChunk(str)]);
  }
  sql2.raw = raw;
  function join(chunks, separator) {
    const result = [];
    for (const [i, chunk] of chunks.entries()) {
      if (i > 0 && separator !== void 0) {
        result.push(separator);
      }
      result.push(chunk);
    }
    return new SQL(result);
  }
  sql2.join = join;
  function identifier(value) {
    return new Name(value);
  }
  sql2.identifier = identifier;
  function placeholder2(name2) {
    return new Placeholder(name2);
  }
  sql2.placeholder = placeholder2;
  function param2(value, encoder) {
    return new Param(value, encoder);
  }
  sql2.param = param2;
})(sql || (sql = {}));
((SQL2) => {
  class Aliased {
    constructor(sql2, fieldAlias) {
      this.sql = sql2;
      this.fieldAlias = fieldAlias;
    }
    static [entityKind] = "SQL.Aliased";
    /** @internal */
    isSelectionField = false;
    getSQL() {
      return this.sql;
    }
    /** @internal */
    clone() {
      return new Aliased(this.sql, this.fieldAlias);
    }
  }
  SQL2.Aliased = Aliased;
})(SQL || (SQL = {}));
class Placeholder {
  constructor(name2) {
    this.name = name2;
  }
  static [entityKind] = "Placeholder";
  getSQL() {
    return new SQL([this]);
  }
}
function placeholder(name2) {
  return new Placeholder(name2);
}
function fillPlaceholders(params, values) {
  return params.map((p) => {
    if (is(p, Placeholder)) {
      if (!(p.name in values)) {
        throw new Error(`No value for placeholder "${p.name}" was provided`);
      }
      return values[p.name];
    }
    if (is(p, Param) && is(p.value, Placeholder)) {
      if (!(p.value.name in values)) {
        throw new Error(`No value for placeholder "${p.value.name}" was provided`);
      }
      return p.encoder.mapToDriverValue(values[p.value.name]);
    }
    return p;
  });
}
const IsDrizzleView = /* @__PURE__ */ Symbol.for("drizzle:IsDrizzleView");
class View {
  static [entityKind] = "View";
  /** @internal */
  [ViewBaseConfig];
  /** @internal */
  [IsDrizzleView] = true;
  constructor({ name: name2, schema: schema2, selectedFields, query }) {
    this[ViewBaseConfig] = {
      name: name2,
      originalName: name2,
      schema: schema2,
      selectedFields,
      query,
      isExisting: !query,
      isAlias: false
    };
  }
  getSQL() {
    return new SQL([this]);
  }
}
function isView(view) {
  return typeof view === "object" && view !== null && IsDrizzleView in view;
}
function getViewName(view) {
  return view[ViewBaseConfig].name;
}
Column.prototype.getSQL = function() {
  return new SQL([this]);
};
Table.prototype.getSQL = function() {
  return new SQL([this]);
};
Subquery.prototype.getSQL = function() {
  return new SQL([this]);
};
class ColumnAliasProxyHandler {
  constructor(table) {
    this.table = table;
  }
  static [entityKind] = "ColumnAliasProxyHandler";
  get(columnObj, prop) {
    if (prop === "table") {
      return this.table;
    }
    return columnObj[prop];
  }
}
class TableAliasProxyHandler {
  constructor(alias, replaceOriginalName) {
    this.alias = alias;
    this.replaceOriginalName = replaceOriginalName;
  }
  static [entityKind] = "TableAliasProxyHandler";
  get(target, prop) {
    if (prop === Table.Symbol.IsAlias) {
      return true;
    }
    if (prop === Table.Symbol.Name) {
      return this.alias;
    }
    if (this.replaceOriginalName && prop === Table.Symbol.OriginalName) {
      return this.alias;
    }
    if (prop === ViewBaseConfig) {
      return {
        ...target[ViewBaseConfig],
        name: this.alias,
        isAlias: true
      };
    }
    if (prop === Table.Symbol.Columns) {
      const columns = target[Table.Symbol.Columns];
      if (!columns) {
        return columns;
      }
      const proxiedColumns = {};
      Object.keys(columns).map((key) => {
        proxiedColumns[key] = new Proxy(
          columns[key],
          new ColumnAliasProxyHandler(new Proxy(target, this))
        );
      });
      return proxiedColumns;
    }
    const value = target[prop];
    if (is(value, Column)) {
      return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(target, this)));
    }
    return value;
  }
}
class RelationTableAliasProxyHandler {
  constructor(alias) {
    this.alias = alias;
  }
  static [entityKind] = "RelationTableAliasProxyHandler";
  get(target, prop) {
    if (prop === "sourceTable") {
      return aliasedTable(target.sourceTable, this.alias);
    }
    return target[prop];
  }
}
function aliasedTable(table, tableAlias) {
  return new Proxy(table, new TableAliasProxyHandler(tableAlias, false));
}
function aliasedRelation(relation, tableAlias) {
  return new Proxy(relation, new RelationTableAliasProxyHandler(tableAlias));
}
function aliasedTableColumn(column, tableAlias) {
  return new Proxy(
    column,
    new ColumnAliasProxyHandler(new Proxy(column.table, new TableAliasProxyHandler(tableAlias, false)))
  );
}
function mapColumnsInAliasedSQLToAlias(query, alias) {
  return new SQL.Aliased(mapColumnsInSQLToAlias(query.sql, alias), query.fieldAlias);
}
function mapColumnsInSQLToAlias(query, alias) {
  return sql.join(query.queryChunks.map((c) => {
    if (is(c, Column)) {
      return aliasedTableColumn(c, alias);
    }
    if (is(c, SQL)) {
      return mapColumnsInSQLToAlias(c, alias);
    }
    if (is(c, SQL.Aliased)) {
      return mapColumnsInAliasedSQLToAlias(c, alias);
    }
    return c;
  }));
}
function mapResultRow(columns, row, joinsNotNullableMap) {
  const nullifyMap = {};
  const result = columns.reduce(
    (result2, { path, field }, columnIndex) => {
      let decoder;
      if (is(field, Column)) {
        decoder = field;
      } else if (is(field, SQL)) {
        decoder = field.decoder;
      } else if (is(field, Subquery)) {
        decoder = field._.sql.decoder;
      } else {
        decoder = field.sql.decoder;
      }
      let node = result2;
      for (const [pathChunkIndex, pathChunk] of path.entries()) {
        if (pathChunkIndex < path.length - 1) {
          if (!(pathChunk in node)) {
            node[pathChunk] = {};
          }
          node = node[pathChunk];
        } else {
          const rawValue = row[columnIndex];
          const value = node[pathChunk] = rawValue === null ? null : decoder.mapFromDriverValue(rawValue);
          if (joinsNotNullableMap && is(field, Column) && path.length === 2) {
            const objectName = path[0];
            if (!(objectName in nullifyMap)) {
              nullifyMap[objectName] = value === null ? getTableName(field.table) : false;
            } else if (typeof nullifyMap[objectName] === "string" && nullifyMap[objectName] !== getTableName(field.table)) {
              nullifyMap[objectName] = false;
            }
          }
        }
      }
      return result2;
    },
    {}
  );
  if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
    for (const [objectName, tableName] of Object.entries(nullifyMap)) {
      if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
        result[objectName] = null;
      }
    }
  }
  return result;
}
function orderSelectedFields(fields, pathPrefix) {
  return Object.entries(fields).reduce((result, [name2, field]) => {
    if (typeof name2 !== "string") {
      return result;
    }
    const newPath = pathPrefix ? [...pathPrefix, name2] : [name2];
    if (is(field, Column) || is(field, SQL) || is(field, SQL.Aliased) || is(field, Subquery)) {
      result.push({ path: newPath, field });
    } else if (is(field, Table)) {
      result.push(...orderSelectedFields(field[Table.Symbol.Columns], newPath));
    } else {
      result.push(...orderSelectedFields(field, newPath));
    }
    return result;
  }, []);
}
function haveSameKeys(left, right) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  for (const [index2, key] of leftKeys.entries()) {
    if (key !== rightKeys[index2]) {
      return false;
    }
  }
  return true;
}
function mapUpdateSet(table, values) {
  const entries = Object.entries(values).filter(([, value]) => value !== void 0).map(([key, value]) => {
    if (is(value, SQL) || is(value, Column)) {
      return [key, value];
    } else {
      return [key, new Param(value, table[Table.Symbol.Columns][key])];
    }
  });
  if (entries.length === 0) {
    throw new Error("No values to set");
  }
  return Object.fromEntries(entries);
}
function applyMixins(baseClass, extendedClasses) {
  for (const extendedClass of extendedClasses) {
    for (const name2 of Object.getOwnPropertyNames(extendedClass.prototype)) {
      if (name2 === "constructor") continue;
      Object.defineProperty(
        baseClass.prototype,
        name2,
        Object.getOwnPropertyDescriptor(extendedClass.prototype, name2) || /* @__PURE__ */ Object.create(null)
      );
    }
  }
}
function getTableColumns(table) {
  return table[Table.Symbol.Columns];
}
function getViewSelectedFields(view) {
  return view[ViewBaseConfig].selectedFields;
}
function getTableLikeName(table) {
  return is(table, Subquery) ? table._.alias : is(table, View) ? table[ViewBaseConfig].name : is(table, SQL) ? void 0 : table[Table.Symbol.IsAlias] ? table[Table.Symbol.Name] : table[Table.Symbol.BaseName];
}
function getColumnNameAndConfig(a, b) {
  return {
    name: typeof a === "string" && a.length > 0 ? a : "",
    config: typeof a === "object" ? a : b
  };
}
function isConfig(data) {
  if (typeof data !== "object" || data === null) return false;
  if (data.constructor.name !== "Object") return false;
  if ("logger" in data) {
    const type = typeof data["logger"];
    if (type !== "boolean" && (type !== "object" || typeof data["logger"]["logQuery"] !== "function") && type !== "undefined") return false;
    return true;
  }
  if ("schema" in data) {
    const type = typeof data["schema"];
    if (type !== "object" && type !== "undefined") return false;
    return true;
  }
  if ("casing" in data) {
    const type = typeof data["casing"];
    if (type !== "string" && type !== "undefined") return false;
    return true;
  }
  if ("mode" in data) {
    if (data["mode"] !== "default" || data["mode"] !== "planetscale" || data["mode"] !== void 0) return false;
    return true;
  }
  if ("connection" in data) {
    const type = typeof data["connection"];
    if (type !== "string" && type !== "object" && type !== "undefined") return false;
    return true;
  }
  if ("client" in data) {
    const type = typeof data["client"];
    if (type !== "object" && type !== "function" && type !== "undefined") return false;
    return true;
  }
  if (Object.keys(data).length === 0) return true;
  return false;
}
const textDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder();
class ForeignKeyBuilder {
  static [entityKind] = "SQLiteForeignKeyBuilder";
  /** @internal */
  reference;
  /** @internal */
  _onUpdate;
  /** @internal */
  _onDelete;
  constructor(config, actions) {
    this.reference = () => {
      const { name: name2, columns, foreignColumns } = config();
      return { name: name2, columns, foreignTable: foreignColumns[0].table, foreignColumns };
    };
    if (actions) {
      this._onUpdate = actions.onUpdate;
      this._onDelete = actions.onDelete;
    }
  }
  onUpdate(action) {
    this._onUpdate = action;
    return this;
  }
  onDelete(action) {
    this._onDelete = action;
    return this;
  }
  /** @internal */
  build(table) {
    return new ForeignKey(table, this);
  }
}
class ForeignKey {
  constructor(table, builder) {
    this.table = table;
    this.reference = builder.reference;
    this.onUpdate = builder._onUpdate;
    this.onDelete = builder._onDelete;
  }
  static [entityKind] = "SQLiteForeignKey";
  reference;
  onUpdate;
  onDelete;
  getName() {
    const { name: name2, columns, foreignColumns } = this.reference();
    const columnNames = columns.map((column) => column.name);
    const foreignColumnNames = foreignColumns.map((column) => column.name);
    const chunks = [
      this.table[TableName],
      ...columnNames,
      foreignColumns[0].table[TableName],
      ...foreignColumnNames
    ];
    return name2 ?? `${chunks.join("_")}_fk`;
  }
}
function uniqueKeyName(table, columns) {
  return `${table[TableName]}_${columns.join("_")}_unique`;
}
class SQLiteColumnBuilder extends ColumnBuilder {
  static [entityKind] = "SQLiteColumnBuilder";
  foreignKeyConfigs = [];
  references(ref, actions = {}) {
    this.foreignKeyConfigs.push({ ref, actions });
    return this;
  }
  unique(name2) {
    this.config.isUnique = true;
    this.config.uniqueName = name2;
    return this;
  }
  generatedAlwaysAs(as, config) {
    this.config.generated = {
      as,
      type: "always",
      mode: config?.mode ?? "virtual"
    };
    return this;
  }
  /** @internal */
  buildForeignKeys(column, table) {
    return this.foreignKeyConfigs.map(({ ref, actions }) => {
      return ((ref2, actions2) => {
        const builder = new ForeignKeyBuilder(() => {
          const foreignColumn = ref2();
          return { columns: [column], foreignColumns: [foreignColumn] };
        });
        if (actions2.onUpdate) {
          builder.onUpdate(actions2.onUpdate);
        }
        if (actions2.onDelete) {
          builder.onDelete(actions2.onDelete);
        }
        return builder.build(table);
      })(ref, actions);
    });
  }
}
class SQLiteColumn extends Column {
  constructor(table, config) {
    if (!config.uniqueName) {
      config.uniqueName = uniqueKeyName(table, [config.name]);
    }
    super(table, config);
    this.table = table;
  }
  static [entityKind] = "SQLiteColumn";
}
class SQLiteBigIntBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteBigIntBuilder";
  constructor(name2) {
    super(name2, "bigint", "SQLiteBigInt");
  }
  /** @internal */
  build(table) {
    return new SQLiteBigInt(table, this.config);
  }
}
class SQLiteBigInt extends SQLiteColumn {
  static [entityKind] = "SQLiteBigInt";
  getSQLType() {
    return "blob";
  }
  mapFromDriverValue(value) {
    if (typeof Buffer !== "undefined" && Buffer.from) {
      const buf = Buffer.isBuffer(value) ? value : value instanceof ArrayBuffer ? Buffer.from(value) : value.buffer ? Buffer.from(value.buffer, value.byteOffset, value.byteLength) : Buffer.from(value);
      return BigInt(buf.toString("utf8"));
    }
    return BigInt(textDecoder.decode(value));
  }
  mapToDriverValue(value) {
    return Buffer.from(value.toString());
  }
}
class SQLiteBlobJsonBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteBlobJsonBuilder";
  constructor(name2) {
    super(name2, "json", "SQLiteBlobJson");
  }
  /** @internal */
  build(table) {
    return new SQLiteBlobJson(
      table,
      this.config
    );
  }
}
class SQLiteBlobJson extends SQLiteColumn {
  static [entityKind] = "SQLiteBlobJson";
  getSQLType() {
    return "blob";
  }
  mapFromDriverValue(value) {
    if (typeof Buffer !== "undefined" && Buffer.from) {
      const buf = Buffer.isBuffer(value) ? value : value instanceof ArrayBuffer ? Buffer.from(value) : value.buffer ? Buffer.from(value.buffer, value.byteOffset, value.byteLength) : Buffer.from(value);
      return JSON.parse(buf.toString("utf8"));
    }
    return JSON.parse(textDecoder.decode(value));
  }
  mapToDriverValue(value) {
    return Buffer.from(JSON.stringify(value));
  }
}
class SQLiteBlobBufferBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteBlobBufferBuilder";
  constructor(name2) {
    super(name2, "buffer", "SQLiteBlobBuffer");
  }
  /** @internal */
  build(table) {
    return new SQLiteBlobBuffer(table, this.config);
  }
}
class SQLiteBlobBuffer extends SQLiteColumn {
  static [entityKind] = "SQLiteBlobBuffer";
  mapFromDriverValue(value) {
    if (Buffer.isBuffer(value)) {
      return value;
    }
    return Buffer.from(value);
  }
  getSQLType() {
    return "blob";
  }
}
function blob(a, b) {
  const { name: name2, config } = getColumnNameAndConfig(a, b);
  if (config?.mode === "json") {
    return new SQLiteBlobJsonBuilder(name2);
  }
  if (config?.mode === "bigint") {
    return new SQLiteBigIntBuilder(name2);
  }
  return new SQLiteBlobBufferBuilder(name2);
}
class SQLiteCustomColumnBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteCustomColumnBuilder";
  constructor(name2, fieldConfig, customTypeParams) {
    super(name2, "custom", "SQLiteCustomColumn");
    this.config.fieldConfig = fieldConfig;
    this.config.customTypeParams = customTypeParams;
  }
  /** @internal */
  build(table) {
    return new SQLiteCustomColumn(
      table,
      this.config
    );
  }
}
class SQLiteCustomColumn extends SQLiteColumn {
  static [entityKind] = "SQLiteCustomColumn";
  sqlName;
  mapTo;
  mapFrom;
  constructor(table, config) {
    super(table, config);
    this.sqlName = config.customTypeParams.dataType(config.fieldConfig);
    this.mapTo = config.customTypeParams.toDriver;
    this.mapFrom = config.customTypeParams.fromDriver;
  }
  getSQLType() {
    return this.sqlName;
  }
  mapFromDriverValue(value) {
    return typeof this.mapFrom === "function" ? this.mapFrom(value) : value;
  }
  mapToDriverValue(value) {
    return typeof this.mapTo === "function" ? this.mapTo(value) : value;
  }
}
function customType(customTypeParams) {
  return (a, b) => {
    const { name: name2, config } = getColumnNameAndConfig(a, b);
    return new SQLiteCustomColumnBuilder(
      name2,
      config,
      customTypeParams
    );
  };
}
class SQLiteBaseIntegerBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteBaseIntegerBuilder";
  constructor(name2, dataType, columnType) {
    super(name2, dataType, columnType);
    this.config.autoIncrement = false;
  }
  primaryKey(config) {
    if (config?.autoIncrement) {
      this.config.autoIncrement = true;
    }
    this.config.hasDefault = true;
    return super.primaryKey();
  }
}
class SQLiteBaseInteger extends SQLiteColumn {
  static [entityKind] = "SQLiteBaseInteger";
  autoIncrement = this.config.autoIncrement;
  getSQLType() {
    return "integer";
  }
}
class SQLiteIntegerBuilder extends SQLiteBaseIntegerBuilder {
  static [entityKind] = "SQLiteIntegerBuilder";
  constructor(name2) {
    super(name2, "number", "SQLiteInteger");
  }
  build(table) {
    return new SQLiteInteger(
      table,
      this.config
    );
  }
}
class SQLiteInteger extends SQLiteBaseInteger {
  static [entityKind] = "SQLiteInteger";
}
class SQLiteTimestampBuilder extends SQLiteBaseIntegerBuilder {
  static [entityKind] = "SQLiteTimestampBuilder";
  constructor(name2, mode) {
    super(name2, "date", "SQLiteTimestamp");
    this.config.mode = mode;
  }
  /**
   * @deprecated Use `default()` with your own expression instead.
   *
   * Adds `DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer))` to the column, which is the current epoch timestamp in milliseconds.
   */
  defaultNow() {
    return this.default(sql`(cast((julianday('now') - 2440587.5)*86400000 as integer))`);
  }
  build(table) {
    return new SQLiteTimestamp(
      table,
      this.config
    );
  }
}
class SQLiteTimestamp extends SQLiteBaseInteger {
  static [entityKind] = "SQLiteTimestamp";
  mode = this.config.mode;
  mapFromDriverValue(value) {
    if (this.config.mode === "timestamp") {
      return new Date(value * 1e3);
    }
    return new Date(value);
  }
  mapToDriverValue(value) {
    const unix = value.getTime();
    if (this.config.mode === "timestamp") {
      return Math.floor(unix / 1e3);
    }
    return unix;
  }
}
class SQLiteBooleanBuilder extends SQLiteBaseIntegerBuilder {
  static [entityKind] = "SQLiteBooleanBuilder";
  constructor(name2, mode) {
    super(name2, "boolean", "SQLiteBoolean");
    this.config.mode = mode;
  }
  build(table) {
    return new SQLiteBoolean(
      table,
      this.config
    );
  }
}
class SQLiteBoolean extends SQLiteBaseInteger {
  static [entityKind] = "SQLiteBoolean";
  mode = this.config.mode;
  mapFromDriverValue(value) {
    return Number(value) === 1;
  }
  mapToDriverValue(value) {
    return value ? 1 : 0;
  }
}
function integer(a, b) {
  const { name: name2, config } = getColumnNameAndConfig(a, b);
  if (config?.mode === "timestamp" || config?.mode === "timestamp_ms") {
    return new SQLiteTimestampBuilder(name2, config.mode);
  }
  if (config?.mode === "boolean") {
    return new SQLiteBooleanBuilder(name2, config.mode);
  }
  return new SQLiteIntegerBuilder(name2);
}
class SQLiteNumericBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteNumericBuilder";
  constructor(name2) {
    super(name2, "string", "SQLiteNumeric");
  }
  /** @internal */
  build(table) {
    return new SQLiteNumeric(
      table,
      this.config
    );
  }
}
class SQLiteNumeric extends SQLiteColumn {
  static [entityKind] = "SQLiteNumeric";
  mapFromDriverValue(value) {
    if (typeof value === "string") return value;
    return String(value);
  }
  getSQLType() {
    return "numeric";
  }
}
class SQLiteNumericNumberBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteNumericNumberBuilder";
  constructor(name2) {
    super(name2, "number", "SQLiteNumericNumber");
  }
  /** @internal */
  build(table) {
    return new SQLiteNumericNumber(
      table,
      this.config
    );
  }
}
class SQLiteNumericNumber extends SQLiteColumn {
  static [entityKind] = "SQLiteNumericNumber";
  mapFromDriverValue(value) {
    if (typeof value === "number") return value;
    return Number(value);
  }
  mapToDriverValue = String;
  getSQLType() {
    return "numeric";
  }
}
class SQLiteNumericBigIntBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteNumericBigIntBuilder";
  constructor(name2) {
    super(name2, "bigint", "SQLiteNumericBigInt");
  }
  /** @internal */
  build(table) {
    return new SQLiteNumericBigInt(
      table,
      this.config
    );
  }
}
class SQLiteNumericBigInt extends SQLiteColumn {
  static [entityKind] = "SQLiteNumericBigInt";
  mapFromDriverValue = BigInt;
  mapToDriverValue = String;
  getSQLType() {
    return "numeric";
  }
}
function numeric(a, b) {
  const { name: name2, config } = getColumnNameAndConfig(a, b);
  const mode = config?.mode;
  return mode === "number" ? new SQLiteNumericNumberBuilder(name2) : mode === "bigint" ? new SQLiteNumericBigIntBuilder(name2) : new SQLiteNumericBuilder(name2);
}
class SQLiteRealBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteRealBuilder";
  constructor(name2) {
    super(name2, "number", "SQLiteReal");
  }
  /** @internal */
  build(table) {
    return new SQLiteReal(table, this.config);
  }
}
class SQLiteReal extends SQLiteColumn {
  static [entityKind] = "SQLiteReal";
  getSQLType() {
    return "real";
  }
}
function real(name2) {
  return new SQLiteRealBuilder(name2 ?? "");
}
class SQLiteTextBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteTextBuilder";
  constructor(name2, config) {
    super(name2, "string", "SQLiteText");
    this.config.enumValues = config.enum;
    this.config.length = config.length;
  }
  /** @internal */
  build(table) {
    return new SQLiteText(
      table,
      this.config
    );
  }
}
class SQLiteText extends SQLiteColumn {
  static [entityKind] = "SQLiteText";
  enumValues = this.config.enumValues;
  length = this.config.length;
  constructor(table, config) {
    super(table, config);
  }
  getSQLType() {
    return `text${this.config.length ? `(${this.config.length})` : ""}`;
  }
}
class SQLiteTextJsonBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteTextJsonBuilder";
  constructor(name2) {
    super(name2, "json", "SQLiteTextJson");
  }
  /** @internal */
  build(table) {
    return new SQLiteTextJson(
      table,
      this.config
    );
  }
}
class SQLiteTextJson extends SQLiteColumn {
  static [entityKind] = "SQLiteTextJson";
  getSQLType() {
    return "text";
  }
  mapFromDriverValue(value) {
    return JSON.parse(value);
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
}
function text(a, b = {}) {
  const { name: name2, config } = getColumnNameAndConfig(a, b);
  if (config.mode === "json") {
    return new SQLiteTextJsonBuilder(name2);
  }
  return new SQLiteTextBuilder(name2, config);
}
class QueryPromise {
  static [entityKind] = "QueryPromise";
  [Symbol.toStringTag] = "QueryPromise";
  catch(onRejected) {
    return this.then(void 0, onRejected);
  }
  finally(onFinally) {
    return this.then(
      (value) => {
        onFinally?.();
        return value;
      },
      (reason) => {
        onFinally?.();
        throw reason;
      }
    );
  }
  then(onFulfilled, onRejected) {
    return this.execute().then(onFulfilled, onRejected);
  }
}
function getSQLiteColumnBuilders() {
  return {
    blob,
    customType,
    integer,
    numeric,
    real,
    text
  };
}
const InlineForeignKeys$1 = /* @__PURE__ */ Symbol.for("drizzle:SQLiteInlineForeignKeys");
class SQLiteTable extends Table {
  static [entityKind] = "SQLiteTable";
  /** @internal */
  static Symbol = Object.assign({}, Table.Symbol, {
    InlineForeignKeys: InlineForeignKeys$1
  });
  /** @internal */
  [Table.Symbol.Columns];
  /** @internal */
  [InlineForeignKeys$1] = [];
  /** @internal */
  [Table.Symbol.ExtraConfigBuilder] = void 0;
}
function sqliteTableBase(name2, columns, extraConfig, schema2, baseName = name2) {
  const rawTable = new SQLiteTable(name2, schema2, baseName);
  const parsedColumns = typeof columns === "function" ? columns(getSQLiteColumnBuilders()) : columns;
  const builtColumns = Object.fromEntries(
    Object.entries(parsedColumns).map(([name22, colBuilderBase]) => {
      const colBuilder = colBuilderBase;
      colBuilder.setName(name22);
      const column = colBuilder.build(rawTable);
      rawTable[InlineForeignKeys$1].push(...colBuilder.buildForeignKeys(column, rawTable));
      return [name22, column];
    })
  );
  const table = Object.assign(rawTable, builtColumns);
  table[Table.Symbol.Columns] = builtColumns;
  table[Table.Symbol.ExtraConfigColumns] = builtColumns;
  if (extraConfig) {
    table[SQLiteTable.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return table;
}
const sqliteTable = (name2, columns, extraConfig) => {
  return sqliteTableBase(name2, columns, extraConfig);
};
class IndexBuilderOn {
  constructor(name2, unique) {
    this.name = name2;
    this.unique = unique;
  }
  static [entityKind] = "SQLiteIndexBuilderOn";
  on(...columns) {
    return new IndexBuilder(this.name, columns, this.unique);
  }
}
class IndexBuilder {
  static [entityKind] = "SQLiteIndexBuilder";
  /** @internal */
  config;
  constructor(name2, columns, unique) {
    this.config = {
      name: name2,
      columns,
      unique,
      where: void 0
    };
  }
  /**
   * Condition for partial index.
   */
  where(condition) {
    this.config.where = condition;
    return this;
  }
  /** @internal */
  build(table) {
    return new Index(this.config, table);
  }
}
class Index {
  static [entityKind] = "SQLiteIndex";
  config;
  constructor(config, table) {
    this.config = { ...config, table };
  }
}
function index$1(name2) {
  return new IndexBuilderOn(name2, false);
}
function uniqueIndex(name2) {
  return new IndexBuilderOn(name2, true);
}
class DrizzleError extends Error {
  static [entityKind] = "DrizzleError";
  constructor({ message, cause }) {
    super(message);
    this.name = "DrizzleError";
    this.cause = cause;
  }
}
class DrizzleQueryError extends Error {
  constructor(query, params, cause) {
    super(`Failed query: ${query}
params: ${params}`);
    this.query = query;
    this.params = params;
    this.cause = cause;
    Error.captureStackTrace(this, DrizzleQueryError);
    if (cause) this.cause = cause;
  }
}
class TransactionRollbackError extends DrizzleError {
  static [entityKind] = "TransactionRollbackError";
  constructor() {
    super({ message: "Rollback" });
  }
}
const InlineForeignKeys = /* @__PURE__ */ Symbol.for("drizzle:PgInlineForeignKeys");
const EnableRLS = /* @__PURE__ */ Symbol.for("drizzle:EnableRLS");
class PgTable extends Table {
  static [entityKind] = "PgTable";
  /** @internal */
  static Symbol = Object.assign({}, Table.Symbol, {
    InlineForeignKeys,
    EnableRLS
  });
  /**@internal */
  [InlineForeignKeys] = [];
  /** @internal */
  [EnableRLS] = false;
  /** @internal */
  [Table.Symbol.ExtraConfigBuilder] = void 0;
  /** @internal */
  [Table.Symbol.ExtraConfigColumns] = {};
}
class PrimaryKeyBuilder {
  static [entityKind] = "PgPrimaryKeyBuilder";
  /** @internal */
  columns;
  /** @internal */
  name;
  constructor(columns, name2) {
    this.columns = columns;
    this.name = name2;
  }
  /** @internal */
  build(table) {
    return new PrimaryKey(table, this.columns, this.name);
  }
}
class PrimaryKey {
  constructor(table, columns, name2) {
    this.table = table;
    this.columns = columns;
    this.name = name2;
  }
  static [entityKind] = "PgPrimaryKey";
  columns;
  name;
  getName() {
    return this.name ?? `${this.table[PgTable.Symbol.Name]}_${this.columns.map((column) => column.name).join("_")}_pk`;
  }
}
function bindIfParam(value, column) {
  if (isDriverValueEncoder(column) && !isSQLWrapper(value) && !is(value, Param) && !is(value, Placeholder) && !is(value, Column) && !is(value, Table) && !is(value, View)) {
    return new Param(value, column);
  }
  return value;
}
const eq = (left, right) => {
  return sql`${left} = ${bindIfParam(right, left)}`;
};
const ne = (left, right) => {
  return sql`${left} <> ${bindIfParam(right, left)}`;
};
function and(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter(
    (c) => c !== void 0
  );
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" and ")),
    new StringChunk(")")
  ]);
}
function or(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter(
    (c) => c !== void 0
  );
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" or ")),
    new StringChunk(")")
  ]);
}
function not(condition) {
  return sql`not ${condition}`;
}
const gt = (left, right) => {
  return sql`${left} > ${bindIfParam(right, left)}`;
};
const gte = (left, right) => {
  return sql`${left} >= ${bindIfParam(right, left)}`;
};
const lt = (left, right) => {
  return sql`${left} < ${bindIfParam(right, left)}`;
};
const lte = (left, right) => {
  return sql`${left} <= ${bindIfParam(right, left)}`;
};
function inArray(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      return sql`false`;
    }
    return sql`${column} in ${values.map((v) => bindIfParam(v, column))}`;
  }
  return sql`${column} in ${bindIfParam(values, column)}`;
}
function notInArray(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      return sql`true`;
    }
    return sql`${column} not in ${values.map((v) => bindIfParam(v, column))}`;
  }
  return sql`${column} not in ${bindIfParam(values, column)}`;
}
function isNull(value) {
  return sql`${value} is null`;
}
function isNotNull(value) {
  return sql`${value} is not null`;
}
function exists(subquery) {
  return sql`exists ${subquery}`;
}
function notExists(subquery) {
  return sql`not exists ${subquery}`;
}
function between(column, min2, max2) {
  return sql`${column} between ${bindIfParam(min2, column)} and ${bindIfParam(
    max2,
    column
  )}`;
}
function notBetween(column, min2, max2) {
  return sql`${column} not between ${bindIfParam(
    min2,
    column
  )} and ${bindIfParam(max2, column)}`;
}
function like(column, value) {
  return sql`${column} like ${value}`;
}
function notLike(column, value) {
  return sql`${column} not like ${value}`;
}
function ilike(column, value) {
  return sql`${column} ilike ${value}`;
}
function notIlike(column, value) {
  return sql`${column} not ilike ${value}`;
}
function arrayContains(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("arrayContains requires at least one value");
    }
    const array = sql`${bindIfParam(values, column)}`;
    return sql`${column} @> ${array}`;
  }
  return sql`${column} @> ${bindIfParam(values, column)}`;
}
function arrayContained(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("arrayContained requires at least one value");
    }
    const array = sql`${bindIfParam(values, column)}`;
    return sql`${column} <@ ${array}`;
  }
  return sql`${column} <@ ${bindIfParam(values, column)}`;
}
function arrayOverlaps(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("arrayOverlaps requires at least one value");
    }
    const array = sql`${bindIfParam(values, column)}`;
    return sql`${column} && ${array}`;
  }
  return sql`${column} && ${bindIfParam(values, column)}`;
}
function asc(column) {
  return sql`${column} asc`;
}
function desc(column) {
  return sql`${column} desc`;
}
class Relation {
  constructor(sourceTable, referencedTable, relationName) {
    this.sourceTable = sourceTable;
    this.referencedTable = referencedTable;
    this.relationName = relationName;
    this.referencedTableName = referencedTable[Table.Symbol.Name];
  }
  static [entityKind] = "Relation";
  referencedTableName;
  fieldName;
}
class Relations {
  constructor(table, config) {
    this.table = table;
    this.config = config;
  }
  static [entityKind] = "Relations";
}
class One extends Relation {
  constructor(sourceTable, referencedTable, config, isNullable) {
    super(sourceTable, referencedTable, config?.relationName);
    this.config = config;
    this.isNullable = isNullable;
  }
  static [entityKind] = "One";
  withFieldName(fieldName) {
    const relation = new One(
      this.sourceTable,
      this.referencedTable,
      this.config,
      this.isNullable
    );
    relation.fieldName = fieldName;
    return relation;
  }
}
class Many extends Relation {
  constructor(sourceTable, referencedTable, config) {
    super(sourceTable, referencedTable, config?.relationName);
    this.config = config;
  }
  static [entityKind] = "Many";
  withFieldName(fieldName) {
    const relation = new Many(
      this.sourceTable,
      this.referencedTable,
      this.config
    );
    relation.fieldName = fieldName;
    return relation;
  }
}
function getOperators() {
  return {
    and,
    between,
    eq,
    exists,
    gt,
    gte,
    ilike,
    inArray,
    isNull,
    isNotNull,
    like,
    lt,
    lte,
    ne,
    not,
    notBetween,
    notExists,
    notLike,
    notIlike,
    notInArray,
    or,
    sql
  };
}
function getOrderByOperators() {
  return {
    sql,
    asc,
    desc
  };
}
function extractTablesRelationalConfig(schema2, configHelpers) {
  if (Object.keys(schema2).length === 1 && "default" in schema2 && !is(schema2["default"], Table)) {
    schema2 = schema2["default"];
  }
  const tableNamesMap = {};
  const relationsBuffer = {};
  const tablesConfig = {};
  for (const [key, value] of Object.entries(schema2)) {
    if (is(value, Table)) {
      const dbName = getTableUniqueName(value);
      const bufferedRelations = relationsBuffer[dbName];
      tableNamesMap[dbName] = key;
      tablesConfig[key] = {
        tsName: key,
        dbName: value[Table.Symbol.Name],
        schema: value[Table.Symbol.Schema],
        columns: value[Table.Symbol.Columns],
        relations: bufferedRelations?.relations ?? {},
        primaryKey: bufferedRelations?.primaryKey ?? []
      };
      for (const column of Object.values(
        value[Table.Symbol.Columns]
      )) {
        if (column.primary) {
          tablesConfig[key].primaryKey.push(column);
        }
      }
      const extraConfig = value[Table.Symbol.ExtraConfigBuilder]?.(value[Table.Symbol.ExtraConfigColumns]);
      if (extraConfig) {
        for (const configEntry of Object.values(extraConfig)) {
          if (is(configEntry, PrimaryKeyBuilder)) {
            tablesConfig[key].primaryKey.push(...configEntry.columns);
          }
        }
      }
    } else if (is(value, Relations)) {
      const dbName = getTableUniqueName(value.table);
      const tableName = tableNamesMap[dbName];
      const relations2 = value.config(
        configHelpers(value.table)
      );
      let primaryKey;
      for (const [relationName, relation] of Object.entries(relations2)) {
        if (tableName) {
          const tableConfig = tablesConfig[tableName];
          tableConfig.relations[relationName] = relation;
        } else {
          if (!(dbName in relationsBuffer)) {
            relationsBuffer[dbName] = {
              relations: {},
              primaryKey
            };
          }
          relationsBuffer[dbName].relations[relationName] = relation;
        }
      }
    }
  }
  return { tables: tablesConfig, tableNamesMap };
}
function relations(table, relations2) {
  return new Relations(
    table,
    (helpers) => Object.fromEntries(
      Object.entries(relations2(helpers)).map(([key, value]) => [
        key,
        value.withFieldName(key)
      ])
    )
  );
}
function createOne(sourceTable) {
  return function one(table, config) {
    return new One(
      sourceTable,
      table,
      config,
      config?.fields.reduce((res, f) => res && f.notNull, true) ?? false
    );
  };
}
function createMany(sourceTable) {
  return function many(referencedTable, config) {
    return new Many(sourceTable, referencedTable, config);
  };
}
function normalizeRelation(schema2, tableNamesMap, relation) {
  if (is(relation, One) && relation.config) {
    return {
      fields: relation.config.fields,
      references: relation.config.references
    };
  }
  const referencedTableTsName = tableNamesMap[getTableUniqueName(relation.referencedTable)];
  if (!referencedTableTsName) {
    throw new Error(
      `Table "${relation.referencedTable[Table.Symbol.Name]}" not found in schema`
    );
  }
  const referencedTableConfig = schema2[referencedTableTsName];
  if (!referencedTableConfig) {
    throw new Error(`Table "${referencedTableTsName}" not found in schema`);
  }
  const sourceTable = relation.sourceTable;
  const sourceTableTsName = tableNamesMap[getTableUniqueName(sourceTable)];
  if (!sourceTableTsName) {
    throw new Error(
      `Table "${sourceTable[Table.Symbol.Name]}" not found in schema`
    );
  }
  const reverseRelations = [];
  for (const referencedTableRelation of Object.values(
    referencedTableConfig.relations
  )) {
    if (relation.relationName && relation !== referencedTableRelation && referencedTableRelation.relationName === relation.relationName || !relation.relationName && referencedTableRelation.referencedTable === relation.sourceTable) {
      reverseRelations.push(referencedTableRelation);
    }
  }
  if (reverseRelations.length > 1) {
    throw relation.relationName ? new Error(
      `There are multiple relations with name "${relation.relationName}" in table "${referencedTableTsName}"`
    ) : new Error(
      `There are multiple relations between "${referencedTableTsName}" and "${relation.sourceTable[Table.Symbol.Name]}". Please specify relation name`
    );
  }
  if (reverseRelations[0] && is(reverseRelations[0], One) && reverseRelations[0].config) {
    return {
      fields: reverseRelations[0].config.references,
      references: reverseRelations[0].config.fields
    };
  }
  throw new Error(
    `There is not enough information to infer relation "${sourceTableTsName}.${relation.fieldName}"`
  );
}
function createTableRelationsHelpers(sourceTable) {
  return {
    one: createOne(sourceTable),
    many: createMany(sourceTable)
  };
}
function mapRelationalRow(tablesConfig, tableConfig, row, buildQueryResultSelection, mapColumnValue = (value) => value) {
  const result = {};
  for (const [
    selectionItemIndex,
    selectionItem
  ] of buildQueryResultSelection.entries()) {
    if (selectionItem.isJson) {
      const relation = tableConfig.relations[selectionItem.tsKey];
      const rawSubRows = row[selectionItemIndex];
      const subRows = typeof rawSubRows === "string" ? JSON.parse(rawSubRows) : rawSubRows;
      result[selectionItem.tsKey] = is(relation, One) ? subRows && mapRelationalRow(
        tablesConfig,
        tablesConfig[selectionItem.relationTableTsKey],
        subRows,
        selectionItem.selection,
        mapColumnValue
      ) : subRows.map(
        (subRow) => mapRelationalRow(
          tablesConfig,
          tablesConfig[selectionItem.relationTableTsKey],
          subRow,
          selectionItem.selection,
          mapColumnValue
        )
      );
    } else {
      const value = mapColumnValue(row[selectionItemIndex]);
      const field = selectionItem.field;
      let decoder;
      if (is(field, Column)) {
        decoder = field;
      } else if (is(field, SQL)) {
        decoder = field.decoder;
      } else {
        decoder = field.sql.decoder;
      }
      result[selectionItem.tsKey] = value === null ? null : decoder.mapFromDriverValue(value);
    }
  }
  return result;
}
function count(expression) {
  return sql`count(${expression || sql.raw("*")})`.mapWith(Number);
}
function countDistinct(expression) {
  return sql`count(distinct ${expression})`.mapWith(Number);
}
function avg(expression) {
  return sql`avg(${expression})`.mapWith(String);
}
function avgDistinct(expression) {
  return sql`avg(distinct ${expression})`.mapWith(String);
}
function sum(expression) {
  return sql`sum(${expression})`.mapWith(String);
}
function sumDistinct(expression) {
  return sql`sum(distinct ${expression})`.mapWith(String);
}
function max(expression) {
  return sql`max(${expression})`.mapWith(is(expression, Column) ? expression : String);
}
function min(expression) {
  return sql`min(${expression})`.mapWith(is(expression, Column) ? expression : String);
}
function toSql(value) {
  return JSON.stringify(value);
}
function l2Distance(column, value) {
  if (Array.isArray(value)) {
    return sql`${column} <-> ${toSql(value)}`;
  }
  return sql`${column} <-> ${value}`;
}
function l1Distance(column, value) {
  if (Array.isArray(value)) {
    return sql`${column} <+> ${toSql(value)}`;
  }
  return sql`${column} <+> ${value}`;
}
function innerProduct(column, value) {
  if (Array.isArray(value)) {
    return sql`${column} <#> ${toSql(value)}`;
  }
  return sql`${column} <#> ${value}`;
}
function cosineDistance(column, value) {
  if (Array.isArray(value)) {
    return sql`${column} <=> ${toSql(value)}`;
  }
  return sql`${column} <=> ${value}`;
}
function hammingDistance(column, value) {
  if (Array.isArray(value)) {
    return sql`${column} <~> ${toSql(value)}`;
  }
  return sql`${column} <~> ${value}`;
}
function jaccardDistance(column, value) {
  if (Array.isArray(value)) {
    return sql`${column} <%> ${toSql(value)}`;
  }
  return sql`${column} <%> ${value}`;
}
const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  tenantId: integer("tenant_id").notNull(),
  email: text("email").notNull(),
  passwordHash: text("password_hash").notNull(),
  userType: text("user_type", { enum: ["admin", "member"] }).notNull(),
  status: text("status", { enum: ["active", "inactive", "banned"] }).default("active"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => ({
  unq: uniqueIndex("user_tenant_email_idx").on(t.tenantId, t.email)
}));
const members = sqliteTable("members", {
  // 关联核心用户 ID
  id: text("id").primaryKey().references(() => users.id, { onDelete: "cascade" }),
  // 会员类型: registered (已注册) | guest (访客)
  type: text("type", { enum: ["registered", "guest"] }).default("registered"),
  // 会员等级 (预留)
  level: integer("level").default(1),
  // 1. 基础档案增强
  nickname: text("nickname"),
  avatar: text("avatar"),
  phone: text("phone"),
  gender: text("gender", { enum: ["unknown", "male", "female"] }).default("unknown"),
  birthday: text("birthday"),
  // 存储为 YYYY-MM-DD
  bio: text("bio"),
  // 个性签名
  // 2. 资产系统
  balance: integer("balance").default(0).notNull(),
  // 余额 (单位: 分)
  points: integer("points").default(0).notNull(),
  // 积分
  // 扩展元数据 (收货地址、偏好等)
  metadata: text("metadata", { mode: "json" }).$type(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
});
const apiTokens = sqliteTable("api_tokens", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  // 关联用户
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  // 令牌名称 (用于标识，如 "移动端应用", "VSCode 插件")
  name: text("name").notNull(),
  // 令牌原始值 (通常为加密存储或带前缀的随机串)
  token: text("token").unique().notNull(),
  // 状态: active (活跃) | revoked (已撤销)
  status: text("status", { enum: ["active", "revoked"] }).default("active"),
  // 过期时间 (可选)
  expiresAt: integer("expires_at", { mode: "timestamp" }),
  // 最后使用时间
  lastUsedAt: integer("last_used_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const verificationCodes = sqliteTable("verification_codes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  code: text("code").notNull(),
  type: text("type", { enum: ["register", "reset_password"] }).default("register"),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const balanceLogs = sqliteTable("balance_logs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  tenantId: integer("tenant_id").notNull(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  type: text("type", { enum: ["add", "sub", "set"] }).notNull(),
  amount: integer("amount").notNull(),
  // 变动金额 (分)
  before: integer("before").notNull(),
  // 变动前金额
  after: integer("after").notNull(),
  // 变动后金额
  remark: text("remark"),
  // 备注
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  // 兼容性字段：防止旧表 NOT NULL 约束报错
  beforeAmount: integer("before_amount"),
  afterAmount: integer("after_amount")
}, (t) => ({
  tenantUserIdx: index$1("balance_tenant_user_idx").on(t.tenantId, t.userId)
}));
const pointsLogs = sqliteTable("points_logs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  tenantId: integer("tenant_id").notNull(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  type: text("type", { enum: ["add", "sub", "set"] }).notNull(),
  amount: integer("amount").notNull(),
  before: integer("before").notNull(),
  after: integer("after").notNull(),
  remark: text("remark"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  // 兼容性字段：防止旧表 NOT NULL 约束报错
  beforeAmount: integer("before_amount"),
  afterAmount: integer("after_amount")
}, (t) => ({
  tenantUserIdx: index$1("points_tenant_user_idx").on(t.tenantId, t.userId)
}));
const mailTemplates = sqliteTable("mail_templates", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  subject: text("subject").notNull(),
  content: text("content").notNull(),
  vars: text("vars"),
  // 变量说明，JSON 字符串
  updatedAt: integer("updated_at", { mode: "timestamp" })
});
const mailMessages = sqliteTable("mail_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  threadId: text("thread_id").notNull(),
  // 用于聚合会话
  fromEmail: text("from_email").notNull(),
  toEmail: text("to_email").notNull(),
  subject: text("subject"),
  content: text("content").notNull(),
  direction: text("direction", { enum: ["inbound", "outbound"] }).notNull(),
  status: text("status", { enum: ["unread", "read", "replied"] }).default("unread"),
  metadata: text("metadata", { mode: "json" }).$type(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
}, (t) => ({
  threadIdx: index$1("mail_thread_idx").on(t.threadId),
  fromIdx: index$1("mail_from_idx").on(t.fromEmail)
}));
const aiAgents = sqliteTable("ai_agents", {
  id: text("id").primaryKey(),
  // UUID
  tenantId: integer("tenant_id").notNull().default(0),
  // 租户隔离
  name: text("name").notNull(),
  avatar: text("avatar"),
  description: text("description"),
  masterModelId: text("master_model_id").notNull(),
  // 主控模型 ID (例如: gemini-1.5-flash)
  systemPrompt: text("system_prompt"),
  // 系统提示词 Prompt (最多1000字)
  systemRoleId: integer("system_role_id").references(() => roles.id, { onDelete: "set null" }),
  // 关联系统权限角色
  manualInstructions: text("manual_instructions"),
  // 手动微调指令
  capabilityOverrides: text("capability_overrides", { mode: "json" }).$type().default("{}").notNull(),
  // 覆盖的能力状态配置
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
});
const agentConfigs = sqliteTable("agent_configs", {
  agentId: text("agent_id").primaryKey().references(() => aiAgents.id, { onDelete: "cascade" }),
  subModels: text("sub_models", { mode: "json" }).$type().default("[]").notNull(),
  // 存储能力子模型列表 (如语音、图片)
  skills: text("skills", { mode: "json" }).$type().default("[]").notNull(),
  // 绑定技能 ID 列表 (关联 ai-skill-market 插件)
  loadedModels: text("loaded_models", { mode: "json" }).$type().default("[]").notNull()
  // 存储装载的模型 IDs
});
const agentSessions = sqliteTable("agent_sessions", {
  id: text("id").primaryKey(),
  // UUID
  agentId: text("agent_id").notNull().references(() => aiAgents.id, { onDelete: "cascade" }),
  // 关联 AI 员工
  title: text("title").notNull(),
  // 会话标题
  summary: text("summary"),
  // 长时记忆摘要
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
});
const agentMessages = sqliteTable("agent_messages", {
  id: text("id").primaryKey(),
  // UUID
  agentId: text("agent_id").notNull().references(() => aiAgents.id, { onDelete: "cascade" }),
  sessionId: text("session_id").references(() => agentSessions.id, { onDelete: "cascade" }),
  // 关联的会话ID (级联删除)
  role: text("role").notNull(),
  // 'user' | 'assistant' | 'system' | 'tool'
  content: text("content").notNull(),
  reasoningContent: text("reasoning_content"),
  // 大模型深度思考内容 (reasoning_content)
  attachments: text("attachments", { mode: "json" }).$type().default("[]"),
  // 关联的附件列表
  taskSteps: text("task_steps", { mode: "json" }).$type().default("[]"),
  // 任务执行步骤
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const AGENT_JOB_STATUSES = [
  "draft",
  "queued",
  "running",
  "waiting_review",
  "waiting_user",
  "blocked",
  "failed",
  "completed",
  "cancelled",
  "rolled_back"
];
const AGENT_STEP_STATUSES = [
  "pending",
  "assigned",
  "running",
  "submitted",
  "reviewing",
  "rejected",
  "approved",
  "failed",
  "skipped",
  "cancelled",
  "rolled_back"
];
const AGENT_REVIEW_STATUSES = [
  "not_required",
  "pending",
  "reviewing",
  "approved",
  "rejected"
];
const AGENT_ASSIGNMENT_STATUSES = [
  "assigned",
  "accepted",
  "running",
  "submitted",
  "cancelled"
];
const AGENT_REVIEW_DECISIONS = [
  "approved",
  "rejected",
  "warning"
];
const AGENT_RISK_LEVELS = [
  "low",
  "medium",
  "high"
];
const TERMINAL_JOB_STATUSES = /* @__PURE__ */ new Set([
  "completed",
  "cancelled",
  "rolled_back"
]);
function isTerminalJobStatus(status) {
  return !!status && TERMINAL_JOB_STATUSES.has(status);
}
function isValidJobStatus(status) {
  return !!status && AGENT_JOB_STATUSES.includes(status);
}
function isValidStepStatus(status) {
  return !!status && AGENT_STEP_STATUSES.includes(status);
}
function isValidReviewStatus(status) {
  return !!status && AGENT_REVIEW_STATUSES.includes(status);
}
function isValidAssignmentStatus(status) {
  return !!status && AGENT_ASSIGNMENT_STATUSES.includes(status);
}
function isValidReviewDecision(decision) {
  return !!decision && AGENT_REVIEW_DECISIONS.includes(decision);
}
function isValidRiskLevel(level) {
  return !!level && AGENT_RISK_LEVELS.includes(level);
}
const JOB_TRANSITIONS = {
  draft: ["queued", "cancelled"],
  queued: ["running", "cancelled"],
  running: ["waiting_review", "waiting_user", "blocked", "failed", "completed", "cancelled"],
  waiting_review: ["running", "blocked", "failed", "cancelled"],
  waiting_user: ["running", "blocked", "cancelled"],
  blocked: ["queued", "running", "failed", "cancelled"],
  failed: ["queued", "cancelled"],
  completed: ["rolled_back"],
  cancelled: [],
  rolled_back: []
};
const STEP_TRANSITIONS = {
  pending: ["assigned", "skipped", "cancelled"],
  assigned: ["running", "cancelled"],
  running: ["submitted", "failed", "cancelled"],
  submitted: ["reviewing", "approved"],
  reviewing: ["approved", "rejected", "failed"],
  rejected: ["assigned", "running", "cancelled"],
  approved: ["rolled_back"],
  failed: ["assigned", "running", "cancelled"],
  skipped: [],
  cancelled: [],
  rolled_back: []
};
const REVIEW_TRANSITIONS = {
  not_required: ["pending", "approved"],
  pending: ["reviewing", "approved", "rejected"],
  reviewing: ["approved", "rejected"],
  approved: [],
  rejected: ["pending", "reviewing"]
};
function canTransitionJob(from, to) {
  return JOB_TRANSITIONS[from]?.includes(to) || false;
}
function canTransitionStep(from, to) {
  return STEP_TRANSITIONS[from]?.includes(to) || false;
}
function canTransitionReview(from, to) {
  return REVIEW_TRANSITIONS[from]?.includes(to) || false;
}
const agentJobs = sqliteTable("agent_jobs", {
  id: text("id").primaryKey(),
  tenantId: integer("tenant_id").notNull().default(0),
  type: text("type").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status", { enum: AGENT_JOB_STATUSES }).notNull().default("draft"),
  priority: text("priority", { enum: ["low", "normal", "high"] }).notNull().default("normal"),
  initiatorUserId: text("initiator_user_id"),
  coordinatorAgentId: text("coordinator_agent_id").references(() => aiAgents.id, { onDelete: "set null" }),
  sourceModule: text("source_module"),
  sourceEntityType: text("source_entity_type"),
  sourceEntityId: text("source_entity_id"),
  currentStepId: text("current_step_id"),
  latestArtifactId: text("latest_artifact_id"),
  metadata: text("metadata", { mode: "json" }).$type().default("{}").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date()),
  completedAt: integer("completed_at", { mode: "timestamp" })
}, (table) => ({
  statusIdx: index$1("agent_jobs_status_idx").on(table.tenantId, table.status),
  coordinatorIdx: index$1("agent_jobs_coordinator_idx").on(table.coordinatorAgentId),
  sourceIdx: index$1("agent_jobs_source_idx").on(table.sourceModule, table.sourceEntityId)
}));
const agentJobSteps = sqliteTable("agent_job_steps", {
  id: text("id").primaryKey(),
  jobId: text("job_id").notNull().references(() => agentJobs.id, { onDelete: "cascade" }),
  tenantId: integer("tenant_id").notNull().default(0),
  stepType: text("step_type").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status", { enum: AGENT_STEP_STATUSES }).notNull().default("pending"),
  sequence: integer("sequence").notNull().default(1),
  dependsOnStepId: text("depends_on_step_id"),
  parentStepId: text("parent_step_id"),
  isParallel: integer("is_parallel", { mode: "boolean" }).notNull().default(false),
  inputArtifactIds: text("input_artifact_ids", { mode: "json" }).$type().default("[]").notNull(),
  outputArtifactIds: text("output_artifact_ids", { mode: "json" }).$type().default("[]").notNull(),
  reviewStatus: text("review_status", { enum: AGENT_REVIEW_STATUSES }).notNull().default("not_required"),
  assignedAgentId: text("assigned_agent_id").references(() => aiAgents.id, { onDelete: "set null" }),
  metadata: text("metadata", { mode: "json" }).$type().default("{}").notNull(),
  startedAt: integer("started_at", { mode: "timestamp" }),
  finishedAt: integer("finished_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
}, (table) => ({
  jobSequenceIdx: index$1("agent_job_steps_job_sequence_idx").on(table.jobId, table.sequence),
  jobStatusIdx: index$1("agent_job_steps_job_status_idx").on(table.jobId, table.status),
  assignedIdx: index$1("agent_job_steps_assigned_idx").on(table.assignedAgentId)
}));
const agentTaskAssignments = sqliteTable("agent_task_assignments", {
  id: text("id").primaryKey(),
  jobId: text("job_id").notNull().references(() => agentJobs.id, { onDelete: "cascade" }),
  stepId: text("step_id").notNull().references(() => agentJobSteps.id, { onDelete: "cascade" }),
  tenantId: integer("tenant_id").notNull().default(0),
  agentId: text("agent_id").notNull().references(() => aiAgents.id, { onDelete: "cascade" }),
  assignmentRole: text("assignment_role").notNull().default("executor"),
  status: text("status", { enum: AGENT_ASSIGNMENT_STATUSES }).notNull().default("assigned"),
  assignedBy: text("assigned_by"),
  assignmentReason: text("assignment_reason"),
  sessionId: text("session_id").references(() => agentSessions.id, { onDelete: "set null" }),
  startedAt: integer("started_at", { mode: "timestamp" }),
  finishedAt: integer("finished_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
}, (table) => ({
  stepIdx: index$1("agent_task_assignments_step_idx").on(table.jobId, table.stepId),
  agentIdx: index$1("agent_task_assignments_agent_idx").on(table.agentId, table.status)
}));
const agentArtifacts = sqliteTable("agent_artifacts", {
  id: text("id").primaryKey(),
  jobId: text("job_id").notNull().references(() => agentJobs.id, { onDelete: "cascade" }),
  stepId: text("step_id").references(() => agentJobSteps.id, { onDelete: "set null" }),
  tenantId: integer("tenant_id").notNull().default(0),
  artifactType: text("artifact_type").notNull(),
  title: text("title").notNull(),
  summary: text("summary"),
  version: integer("version").notNull().default(1),
  isLatest: integer("is_latest", { mode: "boolean" }).notNull().default(true),
  contentJson: text("content_json", { mode: "json" }).$type(),
  contentText: text("content_text"),
  schemaVersion: text("schema_version").default("v1"),
  createdByAgentId: text("created_by_agent_id").references(() => aiAgents.id, { onDelete: "set null" }),
  sourceAssignmentId: text("source_assignment_id").references(() => agentTaskAssignments.id, { onDelete: "set null" }),
  reviewStatus: text("review_status", { enum: AGENT_REVIEW_STATUSES }).notNull().default("not_required"),
  reviewedByAgentId: text("reviewed_by_agent_id").references(() => aiAgents.id, { onDelete: "set null" }),
  reviewedAt: integer("reviewed_at", { mode: "timestamp" }),
  metadata: text("metadata", { mode: "json" }).$type().default("{}").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
}, (table) => ({
  jobTypeIdx: index$1("agent_artifacts_job_type_idx").on(table.jobId, table.artifactType),
  stepVersionIdx: index$1("agent_artifacts_step_version_idx").on(table.stepId, table.version),
  latestIdx: index$1("agent_artifacts_latest_idx").on(table.jobId, table.isLatest)
}));
const agentSharedContexts = sqliteTable("agent_shared_contexts", {
  id: text("id").primaryKey(),
  jobId: text("job_id").notNull().references(() => agentJobs.id, { onDelete: "cascade" }),
  tenantId: integer("tenant_id").notNull().default(0),
  contextType: text("context_type").notNull(),
  version: integer("version").notNull().default(1),
  contentJson: text("content_json", { mode: "json" }).$type().notNull(),
  summary: text("summary"),
  updatedByAgentId: text("updated_by_agent_id").references(() => aiAgents.id, { onDelete: "set null" }),
  updatedByUserId: text("updated_by_user_id"),
  sourceArtifactId: text("source_artifact_id").references(() => agentArtifacts.id, { onDelete: "set null" }),
  isLatest: integer("is_latest", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
}, (table) => ({
  latestIdx: index$1("agent_shared_contexts_latest_idx").on(table.jobId, table.contextType, table.isLatest)
}));
const agentReviews = sqliteTable("agent_reviews", {
  id: text("id").primaryKey(),
  jobId: text("job_id").notNull().references(() => agentJobs.id, { onDelete: "cascade" }),
  stepId: text("step_id").references(() => agentJobSteps.id, { onDelete: "set null" }),
  artifactId: text("artifact_id").references(() => agentArtifacts.id, { onDelete: "set null" }),
  tenantId: integer("tenant_id").notNull().default(0),
  reviewerAgentId: text("reviewer_agent_id").references(() => aiAgents.id, { onDelete: "set null" }),
  reviewerUserId: text("reviewer_user_id"),
  decision: text("decision", { enum: AGENT_REVIEW_DECISIONS }).notNull(),
  riskLevel: text("risk_level", { enum: AGENT_RISK_LEVELS }).notNull().default("low"),
  comments: text("comments"),
  issuesJson: text("issues_json", { mode: "json" }).$type().default("[]").notNull(),
  requiredChangesJson: text("required_changes_json", { mode: "json" }).$type().default("[]").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
}, (table) => ({
  stepIdx: index$1("agent_reviews_step_idx").on(table.jobId, table.stepId),
  artifactIdx: index$1("agent_reviews_artifact_idx").on(table.artifactId),
  decisionIdx: index$1("agent_reviews_decision_idx").on(table.decision)
}));
const sites = sqliteTable("sites", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  domain: text("domain").unique().notNull(),
  status: text("status", { enum: ["active", "inactive"] }).default("active"),
  // 视觉布局数据 (Sections, Blocks, Themes)
  themeData: text("theme_data", { mode: "json" }).$type(),
  // 运行配置 (SEO, Social, Analytics)
  siteConfig: text("site_config", { mode: "json" }).$type(),
  metadata: text("metadata", { mode: "json" }).$type(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const systemSettings = sqliteTable("system_settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  description: text("description"),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
});
const roles = sqliteTable("roles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").unique().notNull(),
  scope: text("scope", { enum: ["system", "tenant"] }).default("tenant"),
  // system: 全局/系统级 | tenant: 租户/商户级
  description: text("description"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const permissions = sqliteTable("permissions", {
  slug: text("slug").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  permCategory: text("perm_category"),
  // 所属模块归类
  pluginSlug: text("plugin_slug")
  // 逻辑归属：null 代表核心系统 | slug 代表所属插件
});
const rolePermissions = sqliteTable("role_permissions", {
  roleId: integer("role_id").notNull().references(() => roles.id, { onDelete: "cascade" }),
  permissionSlug: text("permission_slug").notNull().references(() => permissions.slug, { onDelete: "cascade" })
}, (t) => ({
  pk: [t.roleId, t.permissionSlug]
}));
const adminsToRoles = sqliteTable("admins_to_roles", {
  adminId: text("admin_id").notNull().references(() => admins.id, { onDelete: "cascade" }),
  roleId: integer("role_id").notNull().references(() => roles.id, { onDelete: "cascade" }),
  tenantId: integer("tenant_id").notNull().default(0)
  // 0 代表系统全局或默认租户
}, (t) => ({
  pk: [t.adminId, t.roleId, t.tenantId]
}));
const adminSiteAccess = sqliteTable("admin_site_access", {
  adminId: text("admin_id").notNull().references(() => admins.id, { onDelete: "cascade" }),
  siteId: integer("site_id").notNull().references(() => sites.id, { onDelete: "cascade" })
}, (t) => ({
  pk: [t.adminId, t.siteId]
}));
const admins = sqliteTable("admins", {
  id: text("id").primaryKey(),
  username: text("username").unique().notNull(),
  hashedPassword: text("hashed_password").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const adminSessions = sqliteTable("admin_sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => admins.id, { onDelete: "cascade" }),
  expiresAt: integer("expires_at").notNull()
});
const memberSessions = sqliteTable("member_sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => members.id, { onDelete: "cascade" }),
  expiresAt: integer("expires_at").notNull()
});
const models = sqliteTable("models", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  // 用于权限名和路由名，例: 'product'
  fieldsJson: text("fields_json", { mode: "json" }).$type().notNull(),
  description: text("description"),
  metadata: text("metadata", { mode: "json" }).$type(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const collections = sqliteTable("collections", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  modelId: integer("model_id").notNull().references(() => models.id, { onDelete: "cascade" }),
  description: text("description"),
  icon: text("icon").default("Layers"),
  // 侧边栏图标
  sort: integer("sort").default(0),
  // 排序权重
  menuGroup: text("menu_group"),
  // 多级菜单分组
  menuOrder: integer("menu_order").default(0),
  // 菜单内置排序
  parentId: integer("parent_id").references(() => collections.id),
  // 父级集合ID (树形结构)
  relationSettings: text("relation_settings", { mode: "json" }).$type(),
  fieldConfig: text("field_config", { mode: "json" }).$type(),
  permissionConfig: text("permission_config", { mode: "json" }).$type(),
  metadata: text("metadata", { mode: "json" }).$type(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const entities = sqliteTable("entities", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  collectionId: integer("collection_id").notNull().references(() => collections.id, { onDelete: "cascade" }),
  dataJson: text("data_json", { mode: "json" }).$type().notNull(),
  locale: text("locale").default("en-US"),
  // 语种编码 (默认 en-US)
  translationGroup: text("translation_group"),
  // 翻译组 ID (UUID)
  createdBy: text("created_by"),
  // 关联管理员 ID
  metadata: text("metadata", { mode: "json" }).$type(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
});
const languages = sqliteTable("languages", {
  code: text("code").primaryKey(),
  // 唯一编码, 如 'zh-CN', 'en-US'
  name: text("name").notNull(),
  // 语言名称
  status: text("status", { enum: ["active", "inactive"] }).default("active"),
  isDefault: integer("is_default", { mode: "boolean" }).default(false),
  sortOrder: integer("sort_order").default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const mediaItems = sqliteTable("media_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  url: text("url").notNull(),
  filename: text("filename").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  isRemote: integer("is_remote", { mode: "boolean" }).default(false),
  createdBy: text("created_by"),
  metadata: text("metadata", { mode: "json" }).$type(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const plugins = sqliteTable("plugins", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").unique().notNull(),
  // 用于服务绑定识别及路由
  name: text("name").notNull(),
  config: text("config", { mode: "json" }).$type(),
  // 插件私有配置
  configSchema: text("config_schema", { mode: "json" }).$type(),
  // 插件配置约束 (可选)
  isEnabled: integer("is_enabled", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
});
const seoGeoMappings = sqliteTable("seo_geo_mappings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  collectionSlug: text("collection_slug").notNull(),
  semanticType: text("semantic_type").notNull(),
  // e.g., 'seo_title', 'canonical_url'
  sourceFieldName: text("source_field_name"),
  // e.g., 'title', 'slug' (可空，用于需直接填写值的情况)
  directValue: text("direct_value"),
  // 直接存储的值 (用于 geo_latitude, geo_longitude 等)
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => ({
  unq: uniqueIndex("seo_geo_unq_idx").on(t.collectionSlug, t.semanticType)
}));
const seoGeoEnabledCollections = sqliteTable("seo_geo_enabled_collections", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  collectionSlug: text("collection_slug").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date())
});
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adminSessions,
  adminSiteAccess,
  admins,
  adminsToRoles,
  agentArtifacts,
  agentConfigs,
  agentJobSteps,
  agentJobs,
  agentMessages,
  agentReviews,
  agentSessions,
  agentSharedContexts,
  agentTaskAssignments,
  aiAgents,
  apiTokens,
  balanceLogs,
  collections,
  entities,
  languages,
  mailMessages,
  mailTemplates,
  mediaItems,
  memberSessions,
  members,
  models,
  permissions,
  plugins,
  pointsLogs,
  rolePermissions,
  roles,
  seoGeoEnabledCollections,
  seoGeoMappings,
  sites,
  systemSettings,
  users,
  verificationCodes
}, Symbol.toStringTag, { value: "Module" }));
class ConsoleLogWriter {
  static [entityKind] = "ConsoleLogWriter";
  write(message) {
    console.log(message);
  }
}
class DefaultLogger {
  static [entityKind] = "DefaultLogger";
  writer;
  constructor(config) {
    this.writer = config?.writer ?? new ConsoleLogWriter();
  }
  logQuery(query, params) {
    const stringifiedParams = params.map((p) => {
      try {
        return JSON.stringify(p);
      } catch {
        return String(p);
      }
    });
    const paramsStr = stringifiedParams.length ? ` -- params: [${stringifiedParams.join(", ")}]` : "";
    this.writer.write(`Query: ${query}${paramsStr}`);
  }
}
class NoopLogger {
  static [entityKind] = "NoopLogger";
  logQuery() {
  }
}
const __vite_import_meta_env__ = { "ASSETS_PREFIX": void 0, "BASE_URL": "/", "DEV": true, "MODE": "production", "PROD": false, "SITE": void 0, "SSR": true, "WRANGLER_ADMIN_PATTERN": "admin.example.com" };
const localClientCache = /* @__PURE__ */ new Map();
const localInitPromises = /* @__PURE__ */ new Map();
const d1ClientCache = /* @__PURE__ */ new WeakMap();
const d1InitPromises = /* @__PURE__ */ new WeakMap();
const isObjectLike = (value) => typeof value === "object" && value !== null || typeof value === "function";
const resetDbClientCache = () => {
  localClientCache.clear();
  localInitPromises.clear();
};
const createDbClient = async (d1) => {
  const d1CacheKey = isObjectLike(d1) ? d1 : null;
  if (d1CacheKey && d1ClientCache.has(d1CacheKey)) {
    return d1ClientCache.get(d1CacheKey);
  }
  if (!d1 && localClientCache.has("LOCAL_SQLITE")) {
    return localClientCache.get("LOCAL_SQLITE");
  }
  const lockKey = "LOCAL_SQLITE";
  if (d1CacheKey) {
    const pending = d1InitPromises.get(d1CacheKey);
    if (pending) return await pending;
  } else {
    if (localInitPromises.has(lockKey)) {
      return await localInitPromises.get(lockKey);
    }
  }
  const initTask = (async () => {
    if (d1CacheKey && d1ClientCache.has(d1CacheKey)) return d1ClientCache.get(d1CacheKey);
    if (!d1 && localClientCache.has(lockKey)) return localClientCache.get(lockKey);
    if (d1 && (typeof d1.select === "function" || typeof d1.query === "function")) {
      return d1;
    }
    typeof process !== "undefined" && !!process.versions?.node;
    const viteEnv = typeof import.meta !== "undefined" ? Object.assign(__vite_import_meta_env__, { NODE_ENV: "development", NODE: "D:\\Program dev\\nodejs\\nodejs\\node.exe" }) : void 0;
    const isDev = !!viteEnv?.DEV || typeof process !== "undefined" && true;
    const isTest = typeof process !== "undefined" && !!process.env.VITEST;
    if (d1 && (typeof d1.select === "function" || typeof d1.query === "function")) {
      return d1;
    }
    let d1Binding = d1;
    if (!d1Binding || Object.keys(d1Binding).length === 0) {
      d1Binding = d1?.DB || d1?.env?.DB;
    }
    const isD1 = d1Binding && (typeof d1Binding.prepare === "function" || typeof d1Binding.batch === "function");
    if (isD1) {
      try {
        const { drizzle: drizzleD1 } = await import("./index_CjEzgYG6.mjs");
        const client = drizzleD1(d1Binding, { schema });
        if (d1CacheKey) {
          d1ClientCache.set(d1CacheKey, client);
        }
        return client;
      } catch (e) {
        console.error("❌ [DB D1] 初始化驱动失败:", e);
        throw e;
      }
    }
    if (isDev && !isTest) {
      console.error("❌ [DB Admin] 致命错误：数据库绑定 (D1) 丢失！");
      console.warn("当前获得的 d1 对象内容:", typeof d1, d1 ? Object.keys(d1) : "null");
      throw new Error("Database Binding Missing (D1 REQUIRED)");
    }
    throw new Error(`❌ [DB Error] 无法初始化数据库驱动。d1Type=${typeof d1}`);
  })();
  if (d1CacheKey) {
    d1InitPromises.set(d1CacheKey, initTask);
  } else {
    localInitPromises.set(lockKey, initTask);
  }
  try {
    const client = await initTask;
    return client;
  } finally {
    if (d1CacheKey) {
      d1InitPromises.delete(d1CacheKey);
    } else {
      localInitPromises.delete(lockKey);
    }
  }
};
class BaseRepository {
  constructor(db) {
    this.db = db;
  }
  db;
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseName,
  BaseRepository,
  Column,
  ColumnAliasProxyHandler,
  ColumnBuilder,
  Columns,
  ConsoleLogWriter,
  DefaultLogger,
  DrizzleError,
  DrizzleQueryError,
  ExtraConfigBuilder,
  ExtraConfigColumns,
  FakePrimitiveParam,
  IsAlias,
  Many,
  Name,
  NoopLogger,
  One,
  OriginalName,
  Param,
  Placeholder,
  QueryPromise,
  Relation,
  RelationTableAliasProxyHandler,
  Relations,
  get SQL() {
    return SQL;
  },
  Schema,
  StringChunk,
  Subquery,
  Table,
  TableAliasProxyHandler,
  TransactionRollbackError,
  View,
  ViewBaseConfig,
  WithSubquery,
  aliasedRelation,
  aliasedTable,
  aliasedTableColumn,
  and,
  applyMixins,
  arrayContained,
  arrayContains,
  arrayOverlaps,
  asc,
  avg,
  avgDistinct,
  between,
  bindIfParam,
  cosineDistance,
  count,
  countDistinct,
  createDbClient,
  createMany,
  createOne,
  createTableRelationsHelpers,
  desc,
  entityKind,
  eq,
  exists,
  extractTablesRelationalConfig,
  fillPlaceholders,
  getColumnNameAndConfig,
  getOperators,
  getOrderByOperators,
  getTableColumns,
  getTableLikeName,
  getTableName,
  getTableUniqueName,
  getViewName,
  getViewSelectedFields,
  gt,
  gte,
  hammingDistance,
  hasOwnEntityKind,
  haveSameKeys,
  ilike,
  inArray,
  innerProduct,
  is,
  isConfig,
  isDriverValueEncoder,
  isNotNull,
  isNull,
  isSQLWrapper,
  isTable,
  isView,
  jaccardDistance,
  l1Distance,
  l2Distance,
  like,
  lt,
  lte,
  mapColumnsInAliasedSQLToAlias,
  mapColumnsInSQLToAlias,
  mapRelationalRow,
  mapResultRow,
  mapUpdateSet,
  max,
  min,
  name,
  ne,
  noopDecoder,
  noopEncoder,
  noopMapper,
  normalizeRelation,
  not,
  notBetween,
  notExists,
  notIlike,
  notInArray,
  notLike,
  or,
  orderSelectedFields,
  param,
  placeholder,
  relations,
  resetDbClientCache,
  schema,
  get sql() {
    return sql;
  },
  sum,
  sumDistinct,
  textDecoder
}, Symbol.toStringTag, { value: "Module" }));
export {
  getTableLikeName as $,
  is as A,
  View as B,
  SQL as C,
  Column as D,
  ColumnAliasProxyHandler as E,
  SQLiteTable as F,
  Table as G,
  orderSelectedFields as H,
  getTableName as I,
  SQLiteColumn as J,
  aliasedTableColumn as K,
  getOperators as L,
  mapColumnsInSQLToAlias as M,
  mapColumnsInAliasedSQLToAlias as N,
  getOrderByOperators as O,
  Param as P,
  QueryPromise as Q,
  normalizeRelation as R,
  Subquery as S,
  TableAliasProxyHandler as T,
  getTableUniqueName as U,
  ViewBaseConfig as V,
  One as W,
  DrizzleError as X,
  Many as Y,
  aliasedTable as Z,
  getTableColumns as _,
  permissions as a,
  Schema as a$,
  haveSameKeys as a0,
  applyMixins as a1,
  WithSubquery as a2,
  Columns as a3,
  mapUpdateSet as a4,
  mapRelationalRow as a5,
  DrizzleQueryError as a6,
  TransactionRollbackError as a7,
  fillPlaceholders as a8,
  mapResultRow as a9,
  AGENT_JOB_STATUSES as aA,
  agentArtifacts as aB,
  isTerminalJobStatus as aC,
  isValidReviewStatus as aD,
  isValidAssignmentStatus as aE,
  isValidStepStatus as aF,
  canTransitionStep as aG,
  canTransitionJob as aH,
  isValidReviewDecision as aI,
  canTransitionReview as aJ,
  isValidRiskLevel as aK,
  agentReviews as aL,
  like as aM,
  count as aN,
  BaseName as aO,
  ColumnBuilder as aP,
  ConsoleLogWriter as aQ,
  ExtraConfigBuilder as aR,
  ExtraConfigColumns as aS,
  FakePrimitiveParam as aT,
  IsAlias as aU,
  Name as aV,
  OriginalName as aW,
  Placeholder as aX,
  Relation as aY,
  RelationTableAliasProxyHandler as aZ,
  Relations as a_,
  NoopLogger as aa,
  DefaultLogger as ab,
  extractTablesRelationalConfig as ac,
  createTableRelationsHelpers as ad,
  languages as ae,
  verificationCodes as af,
  entities as ag,
  asc as ah,
  adminSiteAccess as ai,
  mediaItems as aj,
  desc as ak,
  mailMessages as al,
  seoGeoEnabledCollections as am,
  seoGeoMappings as an,
  apiTokens as ao,
  balanceLogs as ap,
  pointsLogs as aq,
  aiAgents as ar,
  agentConfigs as as,
  agentMessages as at,
  agentSessions as au,
  agentJobs as av,
  agentJobSteps as aw,
  agentSharedContexts as ax,
  agentTaskAssignments as ay,
  isValidJobStatus as az,
  sqliteTable as b,
  StringChunk as b0,
  aliasedRelation as b1,
  arrayContained as b2,
  arrayContains as b3,
  arrayOverlaps as b4,
  avg as b5,
  avgDistinct as b6,
  between as b7,
  bindIfParam as b8,
  cosineDistance as b9,
  name as bA,
  ne as bB,
  noopDecoder as bC,
  noopEncoder as bD,
  noopMapper as bE,
  not as bF,
  notBetween as bG,
  notExists as bH,
  notIlike as bI,
  notInArray as bJ,
  notLike as bK,
  param as bL,
  placeholder as bM,
  relations as bN,
  sum as bO,
  sumDistinct as bP,
  textDecoder as bQ,
  schema as bR,
  index as bS,
  countDistinct as ba,
  createMany as bb,
  createOne as bc,
  exists as bd,
  getColumnNameAndConfig as be,
  getViewName as bf,
  getViewSelectedFields as bg,
  gt as bh,
  gte as bi,
  hammingDistance as bj,
  hasOwnEntityKind as bk,
  ilike as bl,
  innerProduct as bm,
  isConfig as bn,
  isDriverValueEncoder as bo,
  isNotNull as bp,
  isNull as bq,
  isSQLWrapper as br,
  isTable as bs,
  isView as bt,
  jaccardDistance as bu,
  l1Distance as bv,
  l2Distance as bw,
  lt as bx,
  max as by,
  min as bz,
  collections as c,
  integer as d,
  eq as e,
  createDbClient as f,
  and as g,
  systemSettings as h,
  inArray as i,
  mailTemplates as j,
  roles as k,
  adminsToRoles as l,
  models as m,
  index$1 as n,
  or as o,
  plugins as p,
  lte as q,
  rolePermissions as r,
  sql as s,
  text as t,
  adminSessions as u,
  admins as v,
  memberSessions as w,
  users as x,
  members as y,
  entityKind as z
};
