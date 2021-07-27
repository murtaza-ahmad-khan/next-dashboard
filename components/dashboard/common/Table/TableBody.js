import { Checkbox, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function TBody({
  rows = [],
  headCells,
  emptyRows,
  onRowClick,
  isSelected,
  checkbox,
}) {
  return (
    <TableBody>
      {rows.map((row, index) => {
        const isItemSelected = isSelected(row.name);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={(event) => onRowClick(event, row.name)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.name}
            selected={checkbox ? isItemSelected : null}
          >
            {checkbox && (
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isItemSelected}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </TableCell>
            )}
            {headCells.map((col, i) => {
              if (i === 0) {
                return (
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    key={col.id}
                  >
                    {row[col.id]}
                  </TableCell>
                );
              }
              return (
                <TableCell align="right" key={col.id}>
                  {row[col.id]}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}
