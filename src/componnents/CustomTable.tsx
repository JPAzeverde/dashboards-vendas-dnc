import styled from "styled-components"
import { pxToRem } from "@/utils"
import type { CustomTableProps } from "@/types"

const TableWrapper = styled.div`
	overflow-x:auto;
	width:100%;
	table {
		width:100%;
		border-collapse: collapse;
		.ellipsis {
			display: block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.ellipsis-md {
			width: ${pxToRem(300)};
		}
		.ellipsis-sm {
			width: ${pxToRem(300)};
		}
		.ellipsis-xs {
			width: ${pxToRem(150)};
		}
		th, td{
			height:${pxToRem(48)};
			padding: 0 ${pxToRem(8)} 0 0;
			text-align: left;
			&:last-child{
					text-align: right;
					padding: 0;
			}
		}
		th{
			color:${(props) => props.theme.typographies.subtitle};
			font-weight: 600;
		}
		tr{
			border-bottom:${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
			&:last-child{
					border-bottom:none;
			}
		}
	}
	
`

export function CustomTable( props: CustomTableProps ) {
	const {headers, rows} = props
	return <TableWrapper>
		<table>
			<thead>
				<tr>
					{
						headers.map((header, index) => (
							<th  key={index}>{header}</th>
						))
					}
				</tr>
			</thead>
			<tbody>
				{
					rows.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{
								row.map((cell, cellIndex) =>(
									<td key={cellIndex}>
											{cell}
									</td>
								))
							}
						</tr>
					))
							
				}
			</tbody>
		</table>

	</TableWrapper>
}
