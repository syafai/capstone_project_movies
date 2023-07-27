import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    setError("")

    try {
        await logOut();
        navigate("/signin");
      } catch (error) {
        console.error("Logout Error:", error);
        setError("Failed to log out. Please try again later.");
      }
    };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser?.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button onClick={handleLogout}>Sign Out
        </Button>
      </div>
    </>
  )
}

export default Dashboard;