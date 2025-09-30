const ExpRow = ({row,deleteExperience}) => {
    return (
        <>
        <tr>
            <td>{row.company}</td>
            <td className="hide-sm">{row.title}</td>
            <td className="hide-sm">
                {new Date(row.from).toLocaleDateString()} - {row.current ? ' Now' : new Date(row.to).toLocaleDateString()}
            </td>
            <td>
            <button
              className="btn btn-danger"
              onClick={() => deleteExperience(row._id)}
            >
              Delete
            </button>
            </td>
        </tr>
        </>
    );
};

export default ExpRow;