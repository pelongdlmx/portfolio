import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: { padding: 40, fontFamily: "Helvetica" },
	section: { marginBottom: 10, padding: 5 },
	header: { fontSize: 24, marginBottom: 10, fontWeight: "bold" },
	subtitle: { fontSize: 16, marginBottom: 4, color: "gray" },
	body: { fontSize: 10 },
});

const ResumeDocument = ({ data }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			{/* Sección Básica (Header) */}
			<View style={styles.section}>
				<Text style={styles.header}>{data.basics.name}</Text>
				<Text style={styles.subtitle}>{data.basics.label}</Text>
				<Text style={styles.body}>{data.basics.email}</Text>
			</View>

			{/* Sección de Experiencia (Un ejemplo simplificado) */}
			<View style={styles.section}>
				<Text style={styles.subtitle}>EXPERIENCIA LABORAL</Text>
				{data.work.map((job, index) => (
					<View key={index} style={{ marginBottom: 5 }}>
						<Text style={styles.body}>
							**{job.company}** - {job.position}
						</Text>
						<Text style={styles.body}>
							{job.startDate} - {job.endDate}
						</Text>
					</View>
				))}
			</View>

			{/* Aquí irían las secciones de Skills, Education, etc. */}
		</Page>
	</Document>
);

export default ResumeDocument;
