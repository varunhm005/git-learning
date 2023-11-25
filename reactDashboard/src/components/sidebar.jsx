import React from 'react';

function SideBar() {
    return (
        <div class="col-2">
            <div class="sidebar h-full py-5 d-flex flex-column justify-content-between">
                <div class="row mb-5 branding-container">
                    <h5 class="text-center brand-name">Medico Sales</h5>
                </div>
                <div class="row nav-links">
                    <ul>
                        <li class="nav-link active">
                            <i class='bx bxs-grid-alt me-3'></i>
                            <p>Dashboard</p>
                        </li>
                        <li class="nav-link">
                            <i class='bx bx-test-tube me-3'></i>
                            <p>Lab Test</p>
                        </li>
                        <li class="nav-link">
                            <i class='bx bxs-calendar-plus me-3'></i>
                            <p>Appointment</p>
                        </li>
                        <li class="nav-link">
                            <i class='bx bx-plus-medical me-3'></i>
                            <p>Medicine Order</p>
                        </li>
                        <li class="nav-link">
                            <i class='bx bxs-comment-dots me-3'></i>
                            <p>Message</p>
                        </li>
                        <li class="nav-link">
                            <i class='bx bx-wallet me-3'></i>
                            <p>Payment</p>
                        </li>
                        <li class="nav-link">
                            <i class='bx bx-cog me-3'></i>
                            <p>Settings</p>
                        </li>
                    </ul>
                </div>
                <div class="footer">
                    <div class="d-flex align-items-center justify-content-start">
                        <i class='bx bx-help-circle me-3'></i>
                        <p>Help</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;