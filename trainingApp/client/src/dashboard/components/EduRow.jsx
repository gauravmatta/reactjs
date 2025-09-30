const EduRow = ({ row, deleteEducation}) => {
    return (
        <>
        <tr>
            <td>{row.school}</td>
            <td className="hide-sm">{row.degree}</td>
            <td className="hide-sm">
                {new Date(row.from).toLocaleDateString()} - {row.current ? ' Now' : new Date(row.to).toLocaleDateString()}
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteEducation(row._id)}>Delete</button>
            </td>
        </tr>
        </>
    );
}
export default EduRow;