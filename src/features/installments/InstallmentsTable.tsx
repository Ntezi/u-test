import React from 'react';
import {Installment} from "../../../api/entity/Installment";
import {useGetInstallmentsQuery} from "./installmentsApi";


interface InstallmentsTableProps {
	installments: Installment[];
}

function InstallmentsTable({ installments }: InstallmentsTableProps) {
	return (
		<table id="loan-statements-table" className="checked table-striped table-hover table-responsive table" style={{ width: '100%' }}>
			<thead>
			<tr>
				<th>Instalment Number</th>
				<th>Instalment Date</th>
				<th>Installment</th>
				<th>Loan Interest</th>
				<th>Remaining Cap.</th>
				<th>Charges/Taxes/Commission</th>
				<th>Interest on Unpaid Amount &amp; Penalties</th>
				<th>Outstanding</th>
				<th>Status</th>
			</tr>
			</thead>
			<tbody>
			{installments.map((installment, index) => (
				<tr key={index}>
					<td>{installment.installmentNumber}</td>
					<td>{new Date(installment.installmentDate).toLocaleDateString()}</td>
					<td>{installment.installmentAmount.toFixed(2)}</td>
					<td>{installment.interest.toFixed(2)}</td>
					<td>{installment.remaining.toFixed(2)}</td>
					<td>{installment.chargesTaxesCommission ? installment.chargesTaxesCommission.toFixed(2) : ''}</td>
					<td>{installment.interestOnUnpaidAmountAndPenalties?.toFixed(2)}</td>
					<td>{installment.outstanding?.toFixed(2)}</td>
					<td>{installment.status}</td>
				</tr>
			))}
			</tbody>
		</table>
	);
}
export default InstallmentsTable;

